import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AddHelpdeskCategoryComponent } from "../../components/add-helpdesk-category/add-helpdesk-category.component";
import { IHelpdeskCategory } from "../../interfaces/ticket-category";
import {
  addHelpdeskCategory,
  addHelpdeskCategorySuccess,
  deleteHelpdeskCategory,
  deleteHelpdeskCategorySuccess,
  getHelpdeskCategories,
  updateHelpdeskCategory,
  updateHelpdeskCategorySuccess,
} from "../../store/actions/helpdesk-category.actions";

@Component({
  selector: "app-helpdesk-category-container",
  templateUrl: "./helpdesk-category-container.component.html",
})
export class HelpdeskCategoryContainerComponent extends BaseComponent implements OnInit {
  helpdeskCategories$: Observable<IHelpdeskCategory[]>;
  pagination$: Observable<IPagination>;
  dialogRef: MatDialogRef<AddHelpdeskCategoryComponent>;
  destroyed$ = new Subject<boolean>();

  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(
    private store: Store<any>,
    public dialog: MatDialog,
    public addHelpdeskCategorySuccess$: Actions,
    public updateHelpdeskCategorySuccess$: Actions,
    public deleteHelpdeskCategorySuccess$: Actions
  ) {
    super();
    addHelpdeskCategorySuccess$.pipe(ofType(addHelpdeskCategorySuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      }
      this.loadHelpdeskCategories();
    });

    updateHelpdeskCategorySuccess$
      .pipe(ofType(updateHelpdeskCategorySuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
        this.loadHelpdeskCategories();
      });

    deleteHelpdeskCategorySuccess$
      .pipe(ofType(deleteHelpdeskCategorySuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.loadHelpdeskCategories();
      });
  }

  ngOnInit(): void {
    this.listenObservables();
    this.loadHelpdeskCategories();
  }

  listenObservables() {
    this.helpdeskCategories$ = this.store.select((store) => store.helpdeskCategory.list);
    this.pagination$ = this.store.select((store) => store.helpdeskCategory.pagination);
  }

  loadHelpdeskCategories() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(getHelpdeskCategories({ params: filteredParams }));
  }

  onParamChange(param: IParameters) {
    this.params.currentPage =
      param.currentPage || param.currentPage === 0 ? param.currentPage : this.params.currentPage;
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(getHelpdeskCategories({ params: filteredParams }));
  }

  getParam(parameter?: IParameters) {
    return {
      currentPage: this.params.currentPage,
      size: parameter.size ?? this.params.size,
      searchKey: parameter.search || parameter.search === "" ? parameter.search : "",
      sortBy:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortBy === "" ? parameter.sortBy : this.params.sortBy,
      sortByOrder:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortByOrder === ""
          ? parameter.sortByOrder
          : this.params.sortByOrder,
      status: parameter.status ? parameter.status : "",
    };
  }

  showAddHelpdeskCategoryModal() {
    this.dialogRef = this.dialog.open(AddHelpdeskCategoryComponent, {
      id: "addHelpdeskCategory",
      data: {},
      panelClass: "dialog-contains-form",
      disableClose: true,
    });
    this.dialogRef.componentInstance.addHelpdeskCategoryClicked.subscribe((d) => {
      this.store.dispatch(addHelpdeskCategory({ payload: d }));
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
    this.dialogRef.componentInstance.dialogCloseClicked.subscribe((d) => {
      this.dialogRef.close();
    });
  }

  showUpdateHelpdeskCategoryModal(categoryDetail: IHelpdeskCategory) {
    this.dialogRef = this.dialog.open(AddHelpdeskCategoryComponent, {
      id: "updateHelpdeskCategory",
      data: {
        categoryDetail: categoryDetail,
      },
      panelClass: "dialog-contains-form",
      disableClose: true,
    });

    this.dialogRef.componentInstance.updateHelpdeskCategoryClicked.subscribe((d) => {
      this.store.dispatch(updateHelpdeskCategory({ id: categoryDetail?.id, payload: d }));
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
    this.dialogRef.componentInstance.dialogCloseClicked.subscribe((d) => {
      this.dialogRef.close();
    });
  }

  showDeleteHelpdeskCategoryModal(categoryId: string) {
    const options = {
      message: this.getTranslatedString("confirm_delete_helpdesk_category"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(deleteHelpdeskCategory({ id: categoryId }));
      }
    });
  }
}
