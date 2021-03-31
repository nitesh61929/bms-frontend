import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { MatSelectChange } from "@angular/material/select";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import DateUtils from "@core/utilities/date-utils";
import { Store } from "@ngrx/store";
import { IHelpdesk } from "@shared/interfaces/helpdesk";
import { IHelpdeskComment } from "@shared/interfaces/helpdesk-comment";
import { HelpdeskService } from "@shared/services/helpdesk/helpdesk.service";
import { postComment } from "@shared/store/actions/helpdesk.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-helpdesk-detail",
  templateUrl: "./helpdesk-detail.component.html",
})
export class HelpdeskDetailComponent extends BaseComponent implements OnInit, OnChanges {
  @ViewChild("postCommentNgForm") postCommentNgForm: NgForm;
  @ViewChild("matSelect") matSelect: any;
  @Output() statusChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() dueDateChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() assigneeChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() helpdeskDetail: IHelpdesk;
  @Input() helpdeskComments: IHelpdeskComment[];
  @Input() possibleAssignees: [];
  @Input() postCommentError$: Observable<Error>;
  @Input() updateHelpdeskStatusError$: Observable<Error>;
  @Input() updateHelpdeskDueDateError$: Observable<Error>;
  @Input() updateHelpdeskAssigneeError$: Observable<Error>;

  postCommentForm: FormGroup;
  statusUpdateForm: FormGroup;
  dueDateUpdateForm: FormGroup;
  assigneeUpdateForm: FormGroup;
  helpdeskStatuses = [];
  minDate: Date;
  hasTicketCommentListAccess = AppPermissions.TICKET_GET_COMMENTS;
  hasTicketCommentAddAccess = AppPermissions.TICKET_ADD_COMMENT;
  hasTicketStatusUpdateAccess = AppPermissions.TICKET_UPDATE_STATUS;
  hasTicketPriorityUpdateAccess = AppPermissions.TICKET_UPDATE_PRIORITY;
  hasTicketDueDateUpdateAccess = AppPermissions.TICKET_UPDATE_DUE_DATE;
  hasTicketAssigneeUpdateAccess = AppPermissions.TICKET_UPDATE_ASSIGNEE;

  constructor(private store: Store<any>, protected helpdeskService: HelpdeskService) {
    super();
  }

  ngOnInit(): void {
    this.setPostCommentForm();
    this.setStatusSelectForm();
    this.setDueDateUpdateForm();
    this.setAssigneeUpdateForm();
    this.helpdeskStatuses = this.helpdeskService.statuses;
    this.minDate = new Date(new Date().getTime());
  }

  listenObservables() {
    this.postCommentError$.subscribe((err) => {
      if (err && this.postCommentForm) {
        this.errorMessageService.handleServerSideError(this.postCommentForm, err);
      }
    });

    this.updateHelpdeskStatusError$.subscribe((err) => {
      if (err && this.statusUpdateForm) {
        this.errorMessageService.handleServerSideError(this.statusUpdateForm, err);
      }
    });

    this.updateHelpdeskDueDateError$.subscribe((err) => {
      if (err && this.dueDateUpdateForm) {
        this.errorMessageService.handleServerSideError(this.dueDateUpdateForm, err);
      }
    });

    this.updateHelpdeskAssigneeError$.subscribe((err) => {
      if (err && this.assigneeUpdateForm) {
        this.errorMessageService.handleServerSideError(this.assigneeUpdateForm, err);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.helpdeskDetail && changes.helpdeskDetail.currentValue) {
      this.statusUpdateForm?.get("statusSelect").setValue(this.helpdeskDetail?.status);
      if (this.helpdeskDetail?.dueDate) {
        const utcDueDateTime = DateUtils.convertUTCToLocal(this.helpdeskDetail?.dueDate, "Y-MM-DD HH:mm:ss");
        const utcDueDate = DateUtils.convertDateTimeFormat(utcDueDateTime, "YYYY-MM-DD");
        this.dueDateUpdateForm?.get("dueDateSelect").setValue(utcDueDate);
      }
      this.assigneeUpdateForm?.get("assigneeSelect").setValue(this.helpdeskDetail?.assigneeId);
      this.isUpdateDisabled();
    }
  }

  public setPostCommentForm() {
    this.postCommentForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.maxLength(300)]],
    });
  }

  postComment() {
    if (this.postCommentForm.valid) {
      this.store.dispatch(postComment({ helpdeskId: this.helpdeskDetail?.id, payload: this.postCommentForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  resetPostCommentForm() {
    this.postCommentNgForm.resetForm("");
  }

  setStatusSelectForm() {
    this.statusUpdateForm = this.formBuilder.group({
      statusSelect: [],
    });
  }

  onStatusChange(statusChange: MatSelectChange, oldStatus: string) {
    if (statusChange.value !== oldStatus) {
      const updateStatusPayload = {
        status: statusChange.value ?? "",
      };
      this.statusChange.emit(updateStatusPayload);
    }

    return null;
  }

  resetInitialStatus() {
    this.statusUpdateForm.get("statusSelect").setValue(this.helpdeskDetail?.status);
  }

  setDueDateUpdateForm() {
    this.dueDateUpdateForm = this.formBuilder.group({
      dueDateSelect: [],
    });
  }

  onDueDateUpdate(event: MatDatepickerInputEvent<Date>) {
    const newDueDate = DateUtils.convertDateTimeFormat(event.value, "YYYY-MM-DD");
    const utcDueDate = DateUtils.getUtcDateTime(newDueDate);
    const payload = {
      dueDate: utcDueDate ?? "",
    };
    this.dueDateChange.emit(payload);
  }

  resetInitialDueDate() {
    this.dueDateUpdateForm.get("dueDateSelect").setValue(this.helpdeskDetail?.dueDate);
  }

  setAssigneeUpdateForm() {
    this.assigneeUpdateForm = this.formBuilder.group({
      assigneeSelect: [],
    });
  }

  onAssigneeChange(assigneeChange: MatSelectChange, oldAssignee: string) {
    if (assigneeChange.value !== oldAssignee) {
      const payload = {
        assigneeId: assigneeChange.value ?? "",
      };
      this.assigneeChange.emit(payload);
    }

    return null;
  }

  resetInitialAssignee() {
    this.assigneeUpdateForm.get("assigneeSelect").setValue(this.helpdeskDetail?.assigneeId);
  }

  isUpdateDisabled() {
    // return this.helpdeskDetail?.status === "CLOSED" ? true : false;
    if (this.helpdeskDetail?.status === "CLOSED") {
      this.assigneeUpdateForm?.get("assigneeSelect").disable();
      this.statusUpdateForm?.get("statusSelect").disable();
      this.dueDateUpdateForm?.get("dueDateSelect").disable();
    }
  }
}
