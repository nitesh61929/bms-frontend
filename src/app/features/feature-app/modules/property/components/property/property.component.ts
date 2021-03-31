import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import {
  getPropertyStructure,
  getPropertyStructureDetail,
  getSelectedPropertyStructure,
} from "@shared/store/actions/property-structure.actions";
import { Observable } from "rxjs";
import { PropertyDetailFormComponent } from "../property-detail-form/property-detail-form.component";

@Component({
  selector: "app-property",
  templateUrl: "./property.component.html",
})
export class PropertyComponent extends BaseComponent implements OnInit {
  @ViewChild("propertyDetailFormCmp") propertyDetailFormCmp: PropertyDetailFormComponent;
  @Input() propertyDetail$: Observable<IProperty>;
  propertyDetail: IProperty;
  hasPropertyEditAccess = AppPermissions.PROPERTY_EDIT;
  hasPropertyDetailAccess = AppPermissions.PROPERTY_DETAIL;
  hasPropertyStaffListAccess = AppPermissions.PROPERTY_STAFF_LIST;
  hasAssignStaffAccess = AppPermissions.ASSIGN_STAFF_TO_PROPERTY;
  hasCommitteeMemberListAccess = AppPermissions.COMMITTEE_LIST;
  hasCommitteeMemberAddAccess = AppPermissions.COMMITTEE_ADD;

  constructor(protected permissionService: PermissionsService, public store: Store<any>) {
    super();
  }

  ngOnInit() {
    this.propertyDetail$.subscribe((propertyDetail) => {
      this.propertyDetail = propertyDetail;
    });
  }

  onLogoChange(logo: any) {
    this.propertyDetailFormCmp.propertyDetailForm.get("logo").setValue(logo);
    this.propertyDetailFormCmp.proceedUpdate();
  }

  hasPropertyViewOrEditAccess() {
    let editBool = false;
    let viewBool = false;
    const editBool$ = this.permissionService.checkAuthorization(this.hasPropertyEditAccess);
    editBool$.subscribe((b) => {
      editBool = b;
    });

    const viewBool$ = this.permissionService.checkAuthorization(this.hasPropertyDetailAccess);
    viewBool$.subscribe((b) => {
      viewBool = b;
    });
    return editBool || viewBool;
  }

  isOwnerVerified() {
    const owner = this.storage.get(StorageKeys.OWNER);
    return owner?.ownerStatus === "VERIFIED";
  }

  tabClick(clickedTab) {
    const selectedtab = clickedTab?.tab?.textLabel.toLowerCase();
    // if (selectedtab === "property structure") {
    //   this.fetchPropertyStructure();
    //   this.fetchSelectedPropertyStructure();
    //   this.fetchPropertyStructureDetail();
    // } else if (selectedtab === "unit configuration") {
    //   this.fetchMaintenanceCharge();
    //   this.fetchMaintenanceFeature();
    //   this.fetchUnitConfig();
    // } else if (selectedtab === "user") {
    //   this.fetchAllRoles();
    //   this.fetchAllStaffs();
    //   this.fetchPropertyStaffs();
    // } else if (selectedtab === "committee members") {
    //   this.fetchPropertyCommitteeMembers();
    // } else if (selectedtab === "policy") {
    //   this.fetchPolicies();
    // }
  }

  fetchPropertyStructure() {
    this.store.dispatch(getPropertyStructure({ id: this.propertyDetail.propertyType.id }));
  }

  fetchPropertyStructureDetail() {
    this.store.dispatch(getPropertyStructureDetail({}));
  }

  fetchSelectedPropertyStructure() {
    this.store.dispatch(getSelectedPropertyStructure({}));
  }
}
