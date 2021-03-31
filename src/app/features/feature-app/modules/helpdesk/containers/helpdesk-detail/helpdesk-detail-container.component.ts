import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IHelpdesk } from "@shared/interfaces/helpdesk";
import { IHelpdeskComment } from "@shared/interfaces/helpdesk-comment";
import * as helpdeskActions from "@shared/store/actions/helpdesk.actions";
import {
  getHelpdeskComments,
  getHelpdeskDetail,
  getPossibleAssignees,
  loadHelpdesk,
  postComment,
  updateHelpdeskAssignee,
  updateHelpdeskDueDate,
  updateHelpdeskStatus,
} from "@shared/store/actions/helpdesk.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CommentComponent } from "./../../components/comment/comment/comment.component";
import { HelpdeskDetailComponent } from "./../../components/helpdesk-detail/helpdesk-detail.component";

@Component({
  selector: "app-helpdesk-detail-container",
  templateUrl: "./helpdesk-detail-container.component.html",
})
export class HelpdeskDetailContainerComponent extends BaseComponent implements OnInit {
  @ViewChild("helpdeskDetailCmp") helpdeskDetailCmp: HelpdeskDetailComponent;
  @Input() helpdesk: IHelpdesk;
  activePropertyId: string;
  helpdeskDetail$: Observable<IHelpdesk>;
  helpdeskDetail: IHelpdesk;
  helpdeskComments$: Observable<IHelpdeskComment[]>;
  helpdeskComments: IHelpdeskComment[];
  destroyed$ = new Subject<boolean>();
  possibleAssignees$: Observable<any>;
  dialogRef: MatDialogRef<CommentComponent>;
  possibleAssignees: [];
  postCommentError$: Observable<Error>;
  updateHelpdeskStatusError$: Observable<Error>;
  updateHelpdeskDueDateError$: Observable<Error>;
  updateHelpdeskAssigneeError$: Observable<Error>;

  constructor(
    private store: Store<any>,
    public postCommentSuccess$: Actions,
    public updateHelpdeskStatusSuccess$: Actions,
    public updateHelpdeskDueDateSuccess$: Actions,
    public updateHelpdeskAssigneeSuccess$: Actions,
    public dialog: MatDialog
  ) {
    super();
    this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);

    postCommentSuccess$.pipe(ofType(helpdeskActions.postCommentSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.store.dispatch(getHelpdeskComments({ id: this.helpdeskDetail?.id, params: null }));
      this.helpdeskDetailCmp.resetPostCommentForm();
    });

    updateHelpdeskStatusSuccess$
      .pipe(ofType(helpdeskActions.updateHelpdeskStatusSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.store.dispatch(loadHelpdesk({ params: null }));
      });

    updateHelpdeskDueDateSuccess$
      .pipe(ofType(helpdeskActions.updateHelpdeskDueDateSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.store.dispatch(loadHelpdesk({ params: null }));
      });

    updateHelpdeskAssigneeSuccess$
      .pipe(ofType(helpdeskActions.updateHelpdeskAssigneeSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.store.dispatch(loadHelpdesk({ params: null }));
      });
  }

  ngOnInit(): void {
    this.listenObservables();
    this.fetchHelpdeskDetail();
  }

  fetchHelpdeskDetail() {
    if (this.helpdesk.id) {
      this.store.dispatch(getHelpdeskDetail({ id: this.helpdesk.id }));
      this.store.dispatch(getHelpdeskComments({ id: this.helpdesk.id, params: null }));
      this.store.dispatch(getPossibleAssignees({}));
    }
  }

  listenObservables() {
    this.helpdeskDetail$ = this.store.select((store) => store.sharedModule.helpdesk.detail);
    this.helpdeskDetail$.subscribe((d) => {
      this.helpdeskDetail = d;
    });

    this.helpdeskComments$ = this.store.select((store) => store.sharedModule.helpdesk.comments);
    this.helpdeskComments$.subscribe((d) => {
      this.helpdeskComments = d;
    });

    this.possibleAssignees$ = this.store.select((store) => store.sharedModule.helpdesk.assignees);
    this.possibleAssignees$.subscribe((d) => {
      this.possibleAssignees = d;
    });

    this.postCommentError$ = this.store.select((store) => store.sharedModule.helpdesk.postCommentError);
    this.updateHelpdeskStatusError$ = this.store.select(
      (store) => store.sharedModule.helpdesk.updateHelpdeskStatusError
    );
    this.updateHelpdeskDueDateError$ = this.store.select(
      (store) => store.sharedModule.helpdesk.updateHelpdeskDueDateError
    );
    this.updateHelpdeskAssigneeError$ = this.store.select(
      (store) => store.sharedModule.helpdesk.updateHelpdeskAssigneeError
    );
  }

  onUpdateStatus(updateStatusPayload: any) {
    if (updateStatusPayload?.status === "CLOSED") {
      this.showCloseHelpdeskModal(updateStatusPayload, this.helpdeskDetail?.id);
    } else {
      //   const options = {
      //     message: this.getTranslatedString("confirm_status_change"),
      //     cancelText: this.getTranslatedString("common.cancel"),
      //     confirmText: this.getTranslatedString("common.yes"),
      //   };
      //   this.confirmDialog.open(options);
      //   this.confirmDialog.confirmed().subscribe((confirmed) => {
      //     if (confirmed) {
      this.store.dispatch(updateHelpdeskStatus({ id: this.helpdeskDetail?.id, params: updateStatusPayload }));
      // } else {
      //   this.helpdeskDetailCmp.resetInitialStatus();
      // }
      // });
    }
  }

  showCloseHelpdeskModal(updateStatusPayload: any, helpdeskId: string) {
    this.dialogRef = this.dialog.open(CommentComponent, {
      id: "postComment",
      data: {},
      panelClass: "dialog-contains-form",
      disableClose: true,
    });
    this.dialogRef.componentInstance.postCommentClicked.subscribe((d) => {
      this.store.dispatch(postComment({ helpdeskId: helpdeskId, payload: d }));
      this.store.dispatch(updateHelpdeskStatus({ id: helpdeskId, params: updateStatusPayload }));
      this.dialogRef.close();
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
    this.dialogRef.componentInstance.dialogCloseClicked.subscribe((d) => {
      this.dialogRef.close();
      this.helpdeskDetailCmp.resetInitialStatus();
    });
  }

  onUpdateDueDate(payload: any) {
    // const options = {
    //   message: this.getTranslatedString("confirm_due_date_change"),
    //   cancelText: this.getTranslatedString("common.cancel"),
    //   confirmText: this.getTranslatedString("common.yes"),
    // };
    // this.confirmDialog.open(options);
    // this.confirmDialog.confirmed().subscribe((confirmed) => {
    //   if (confirmed) {
    this.store.dispatch(updateHelpdeskDueDate({ id: this.helpdeskDetail?.id, params: payload }));
    //   } else {
    //     this.helpdeskDetailCmp.resetInitialDueDate();
    //   }
    // });
  }

  onUpdateAssignee(payload: any) {
    // const options = {
    //   message: this.getTranslatedString("confirm_assignee_change"),
    //   cancelText: this.getTranslatedString("common.cancel"),
    //   confirmText: this.getTranslatedString("common.yes"),
    // };
    // this.confirmDialog.open(options);
    // this.confirmDialog.confirmed().subscribe((confirmed) => {
    //   if (confirmed) {
    this.store.dispatch(updateHelpdeskAssignee({ id: this.helpdeskDetail?.id, params: payload }));
    //   } else {
    //     this.helpdeskDetailCmp.resetInitialAssignee();
    //   }
    // });
  }
}
