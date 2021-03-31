import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatSelectChange } from "@angular/material/select";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IStaffs } from "@shared/interfaces/staffs";
import { IRole } from "@shared/interfaces/user/role";
import { getAllRoles } from "@shared/store";
import * as propertyActions from "@shared/store/actions/property.actions";
import {
  assignStaffToProperty,
  removeStaffFromProperty,
  updateStaffRole,
} from "@shared/store/actions/property.actions";
import { searchPropertyStaffs } from "@shared/store/actions/staffs.actions";
import { Observable, Subject } from "rxjs";
import { map, startWith, takeUntil } from "rxjs/operators";
import { loadPropertyStaffs, loadPropertyStaffsSuccess } from "../../store/property-staff.actions";

@Component({
  selector: "app-property-staff",
  templateUrl: "./property-staff.component.html",
  styleUrls: ["./property-staff.component.scss"],
})
export class PropertyStaffComponent extends BaseComponent implements OnInit {
  @ViewChild("assignStaffNgForm") assignStaffNgForm: NgForm;
  roles$: Observable<IRole[]>;
  roles: IRole[];
  propertyStaffs$: Observable<IStaffs[]>;
  propertyStaffs: Array<IStaffs>;
  staffs$: Observable<IStaffs[]>;
  staffs: Array<IStaffs>;
  propertyStaffDataSource = new MatTableDataSource<IStaffs>();
  listLength: number;
  assignStaffForm: FormGroup;
  filteredStaffs: Observable<IStaffs[]>;
  destroyed$ = new Subject<boolean>();
  submitted: boolean = false;

  displayedColumns: string[] = ["sn", "fullname", "mobile_number", "role", "actions"];
  hasAssignStaffAccess = AppPermissions.ASSIGN_STAFF_TO_PROPERTY;
  hasGetAllStaffDropdownAccess = AppPermissions.GET_ALL_STAFF_DROPDOWN;
  hasUpdateStaffRoleAccess = AppPermissions.UPDATE_STAFF_ROLE;
  hasRemoveStaffAccess = AppPermissions.REMOVE_STAFF;
  propertyStaffParam: any = {};
  assignPropertyStaffError$: Observable<Error>;
  currentUserId: any;

  constructor(
    private store: Store<any>,
    public assignStaffToPropertySuccess$: Actions,
    public removeStaffFromPropertySuccess$: Actions,
    public updateStaffRoleSuccess$: Actions,
    public loadPropertyStaffsSuccess$: Actions,
    private permissionsService: PermissionsService
  ) {
    super();
    assignStaffToPropertySuccess$
      .pipe(ofType(propertyActions.assignStaffToPropertySuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.submitted = false;
        this.fetchPropertyStaffs();
        this.assignStaffNgForm.resetForm("");
      });

    removeStaffFromPropertySuccess$
      .pipe(ofType(propertyActions.removeStaffFromPropertySuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.submitted = false;
        this.fetchPropertyStaffs();
        this.assignStaffNgForm.resetForm("");
      });

    updateStaffRoleSuccess$
      .pipe(ofType(propertyActions.updateStaffRoleSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.submitted = false;
        this.fetchPropertyStaffs();
        this.assignStaffNgForm.resetForm("");
      });

    loadPropertyStaffsSuccess$
      .pipe(ofType(loadPropertyStaffsSuccess), takeUntil(this.destroyed$))
      .subscribe(({ data }) => {
        this.staffs$.subscribe((staffs) => {
          this.staffs = staffs.filter((user) => !data.find(({ userId }) => user.userId === userId));
          this.listenStaffSearch();
        });
      });
  }

  ngOnInit(): void {
    this.currentUserId = this.storage.get(StorageKeys.USER).id;
    if (this.hasAssignStaffToPropertyAccess()) {
      this.setAssignStaffForm();
      this.fetchAllStaffs();
      this.listenStaffSearch();
    }
    this.fetchPropertyStaffs();
    this.listenObservables();
    this.fetchAllRoles();
  }

  setAssignStaffForm() {
    this.assignStaffForm = this.formBuilder.group({
      user: ["", [Validators.required]],
      userId: ["", [Validators.required]],
      roleId: ["", [Validators.required]],
    });
  }

  private listenStaffSearch() {
    this.filteredStaffs = this.assignStaffForm.get("user").valueChanges.pipe(
      startWith(""),
      map((value) => value),
      map((user) => {
        const name = user && typeof user === "object" ? user?.name : user;
        return name ? this.filterStaff(name) : this.staffs.slice();
      })
    );
  }

  private filterStaff(value: any): IStaffs[] {
    return this.staffs.filter((staff) => {
      if (staff) {
        return staff.name.toLowerCase().includes(value.toLowerCase());
      }
    });
  }

  displayName(staff: IStaffs): string {
    return staff && staff.name ? staff.name : "";
  }

  listenObservables() {
    this.roles$ = this.store.select((store: any) => store.sharedModule.users.roles);
    this.staffs$ = this.store.select((store: any) => store.sharedModule.staffs.staffsForProperty);
    this.propertyStaffs$ = this.store.select((store: any) => store.propertyStaff.list);
    this.roles$.subscribe((roles) => {
      this.roles = roles;
    });

    this.propertyStaffs$.subscribe((propertyStaffs) => {
      this.propertyStaffDataSource = new MatTableDataSource(propertyStaffs);
    });

    this.assignPropertyStaffError$ = this.store.select((store) => store.sharedModule.property.assignPropertyStaffError);
    this.assignPropertyStaffError$.subscribe((err) => {
      if (err && this.assignStaffForm) {
        this.errorMessageService.handleServerSideError(this.assignStaffForm, err);
      }
    });
  }

  fetchAllRoles() {
    this.store.dispatch(getAllRoles({}));
  }

  fetchAllStaffs() {
    this.store.dispatch(searchPropertyStaffs({ params: null }));
  }

  fetchPropertyStaffs() {
    this.store.dispatch(loadPropertyStaffs({ params: this.propertyStaffParam }));
  }

  onUserSelected(selectedUser: MatAutocompleteSelectedEvent) {
    const user = selectedUser.option.value;
    this.assignStaffForm.get("userId").setValue(user?.userId);
  }

  assignStaff() {
    this.submitted = true;
    const user = this.assignStaffForm.get("user").value;
    this.assignStaffForm.get("userId").setValue(user?.userId);
    if (this.assignStaffForm.valid) {
      this.store.dispatch(assignStaffToProperty({ payload: this.assignStaffForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  onRoleChange(roleChange: MatSelectChange, userId: string) {
    const payload = {
      userId,
      roleId: roleChange.value,
    };
    const options = {
      message: this.getTranslatedString("confirm_role_change"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(updateStaffRole({ payload }));
      } else {
        this.fetchPropertyStaffs();
      }
    });
  }

  onRemoveStaff(userId: string) {
    const payload = {
      userId,
    };
    const options = {
      message: this.getTranslatedString("confirm_staff_remove"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(removeStaffFromProperty({ payload }));
      }
    });
  }

  hasRoleUpdatePermission() {
    let bool = false;
    const bool$ = this.permissionsService.checkAuthorization(this.hasUpdateStaffRoleAccess);
    bool$.subscribe((b) => {
      bool = b;
    });
    return bool;
  }

  onSearch(searchValue: string) {
    this.propertyStaffParam.searchKey = searchValue;
    this.fetchPropertyStaffs();
  }

  hasAssignStaffToPropertyAccess() {
    let assignBool = false;
    let staffDropdownBool = false;

    const assignBool$ = this.permissionsService.checkAuthorization(this.hasAssignStaffAccess);
    assignBool$.subscribe((b) => {
      assignBool = b;
    });

    const staffDropdownBool$ = this.permissionsService.checkAuthorization(this.hasGetAllStaffDropdownAccess);
    staffDropdownBool$.subscribe((b) => {
      staffDropdownBool = b;
    });
    return assignBool && staffDropdownBool;
  }

  staffIsCurrentUser(id: any) {
    return id === this.currentUserId;
  }
}
