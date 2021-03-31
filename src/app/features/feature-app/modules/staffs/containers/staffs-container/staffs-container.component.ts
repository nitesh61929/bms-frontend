import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import { IStaffs } from "@shared/interfaces/staffs";
import * as staffsActions from "@shared/store/actions/staffs.actions";
import { loadStaffs } from "@shared/store/actions/staffs.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AddStaffComponent } from "../../components/add-staff/add-staff/add-staff.component";

@Component({
  selector: "app-staffs-container",
  templateUrl: "./staffs-container.component.html",
})
export class StaffsContainerComponent extends BaseComponent implements OnInit {
  staffs$: Observable<IStaffs[]>;
  staffs: Array<IStaffs>;
  pagination$: Observable<IPagination>;
  dialogRef: MatDialogRef<AddStaffComponent>;
  destroyed$ = new Subject<boolean>();
  hasAccountUserListAccess = AppPermissions.OWNER_STAFF_LIST;

  constructor(
    private store: Store,
    public dialog: MatDialog,
    public addStaffSuccess$: Actions,
    private addStaffAsAdminSuccess$: Actions
  ) {
    super();
    addStaffSuccess$.pipe(ofType(staffsActions.addStaffSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      }
    });
    addStaffAsAdminSuccess$
      .pipe(ofType(staffsActions.addStaffAsAdminSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      });
  }

  ngOnInit(): void {
    this.listenObservables();
    this.fetchAllStaffs();
  }

  listenObservables() {
    this.staffs$ = this.store.select((store: any) => store.sharedModule.staffs.list);
    this.pagination$ = this.store.select((store: any) => store.sharedModule.staffs.pagination);
  }

  fetchAllStaffs() {
    this.store.dispatch(loadStaffs({ params: null }));
  }

  showAddStaffModal() {
    this.dialogRef = this.dialog.open(AddStaffComponent, {
      id: "addStaff",
      data: {},
      panelClass: "dialog-contains-form",
      disableClose: true,
    });
    this.dialogRef.componentInstance.addStaffClicked.subscribe((d) => {
      if (d.asAdmin) {
        this.store.dispatch(staffsActions.addStaffAsAdmin({ payload: d }));
      } else {
        this.store.dispatch(staffsActions.addStaff({ payload: d }));
      }
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
    this.dialogRef.componentInstance.dialogCloseClicked.subscribe((d) => {
      this.dialogRef.close();
    });
  }
}
