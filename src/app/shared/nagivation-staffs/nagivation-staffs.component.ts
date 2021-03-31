import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { AppPermissions, AppRoutes } from "@core/enums";
import { PermissionsService } from "@core/services";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as staffsActions from "@shared/store/actions/staffs.actions";
import { loadStaffs } from "@shared/store/actions/staffs.actions";
import { AddStaffComponent } from "app/features/feature-app/modules/staffs/components/add-staff/add-staff/add-staff.component";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IStaffs } from "./../interfaces/staffs";

@Component({
  selector: "app-nagivation-staffs",
  templateUrl: "./nagivation-staffs.component.html",
})
export class NagivationStaffsComponent extends BaseComponent implements OnInit {
  @Output() addStaffClicked: EventEmitter<null> = new EventEmitter<null>();
  @Input() isOwnerVerified: boolean;
  users$: Observable<IStaffs[]>;
  users: Array<IStaffs>;
  dialogRef: MatDialogRef<AddStaffComponent>;
  destroyed$ = new Subject<boolean>();
  hasAccountUserListAccess = AppPermissions.OWNER_STAFF_LIST;
  hasAccountUserAddAccess = AppPermissions.OWNER_ADD_STAFF;
  listBool: boolean = false;

  constructor(
    private store: Store,
    public dialog: MatDialog,
    protected permissionService: PermissionsService,
    public addStaffSuccess$: Actions,
    addStaffAsAdminSuccess$: Actions
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
    this.users$ = this.store.select((store: any) => store.sharedModule.staffs.list);
    this.users$.subscribe((staffs) => {
      this.users = staffs;
      this.users = this.users.filter((staff, idx) => idx < 2);
    });
  }

  fetchAllStaffs() {
    const listBool$ = this.permissionService.checkAuthorization(this.hasAccountUserListAccess);
    listBool$.subscribe((b) => {
      this.listBool = b;
      if (this.listBool) {
        this.store.dispatch(loadStaffs({ params: null }));
      }
    });
  }

  onViewAllClick() {
    this.router.navigateByUrl(AppRoutes.STAFFS);
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

  hasAccountUserViewOrAddAccess() {
    let addBool = false;
    let listBool = false;
    const addBool$ = this.permissionService.checkAuthorization(this.hasAccountUserAddAccess);
    addBool$.subscribe((b) => {
      addBool = b;
    });

    const listBool$ = this.permissionService.checkAuthorization(this.hasAccountUserListAccess);
    listBool$.subscribe((b) => {
      listBool = b;
    });

    return addBool || listBool;
  }
}
