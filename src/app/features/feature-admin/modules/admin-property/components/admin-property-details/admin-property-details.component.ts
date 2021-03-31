import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { IAddress } from "@shared/interfaces/address";
import { getPropertyDetail, updatePropertyStatus } from "@shared/store/actions/property.actions";
import { Observable, Subject } from "rxjs";
import { AdminPropertyService } from "./../../services/admin-property.service";

export interface IProperties {
  sn: number;
  image: string;
  name: string;
  contact: string;
  address: string;
}

@Component({
  selector: "app-admin-property-details",
  templateUrl: "./admin-property-details.component.html",
})
export class AdminPropertyDetailsComponent extends BaseComponent implements OnInit {
  @Input() propertyId: string;
  propertyDetails$: Observable<IProperty>;
  propertyDetails: IProperty;
  propertyStatuses = [];
  statusUpdateForm: FormGroup;
  destroyed$ = new Subject<boolean>();
  propertyStatus: any;

  // PROPERTIES_DATA: IProperties[] = [
  //   {
  //     sn: 1,
  //     image: "./assets/images/hero.jpg",
  //     name: "Ghanashyam Kushwaha",
  //     contact: "977-1-423567890",
  //     address: "Tripura Marg, Tripureswor, Kathmandu, Nepal",
  //   },
  //   {
  //     sn: 2,
  //     image: "./assets/images/hero.jpg",
  //     name: "Prabesh Suwal",
  //     contact: "977-1-423567890",
  //     address: "Tripura Marg, Tripureswor, Kathmandu, Nepal",
  //   },
  //   {
  //     sn: 3,
  //     image: "./assets/images/hero.jpg",
  //     name: "Jagesh Maharjan",
  //     contact: "977-1-423567890",
  //     address: "Balkumari, Koteshwor, Kathmandu, Nepal",
  //   },
  // ];

  // dataSourceProperties = this.PROPERTIES_DATA;
  // columnsToDisplayProperties = ["sn", "image", "name", "contact", "address"];

  constructor(
    private store: Store<any>,
    protected adminPropertyService: AdminPropertyService,
    public dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.propertyId) {
      this.propertyDetails$ = this.store.select((store) => store.sharedModule.property.detail);
      this.store.dispatch(getPropertyDetail({ propertyId: this.propertyId }));
      this.setStatusSelectForm();
      this.listenObservables();
    }
  }

  // openDialog() {
  //   this.dialog.open(DesignDialogAdminOwnerDetailComponent);
  // }

  listenObservables() {
    this.propertyDetails$.subscribe((propertyDetails) => {
      if (propertyDetails) {
        this.propertyDetails = propertyDetails;
        this.propertyStatuses = this.adminPropertyService.propertyStatuses;
        this.propertyStatus = this.propertyStatuses.filter((status) => status.value === this.propertyDetails.status);
        this.propertyStatuses = this.propertyStatuses.filter(
          (status) => status?.position >= this.propertyStatus[0]?.position
        );
        this.statusUpdateForm.get("statusSelect").setValue(this.propertyStatus[0]?.value);
        if (this.propertyDetails?.ownerStatus !== "VERIFIED") {
          this.statusUpdateForm.get("statusSelect").disable();
        } else {
          this.statusUpdateForm.get("statusSelect").enable();
        }
      }
    });
  }

  getMobileNumbers(mobileNumbers: Array<string>) {
    if (mobileNumbers) {
      mobileNumbers = Object.values(mobileNumbers).filter(Boolean);
      return mobileNumbers.length > 0 ? mobileNumbers.join(", ") : "N/A";
    }
    return "N/A";
  }

  getPhones(phones: Array<string>) {
    if (phones) {
      phones = Object.values(phones).filter(Boolean);
      return phones !== null && phones.length > 0 ? phones.join(", ") : "N/A";
    }
    return "N/A";
  }

  getAddress(address: IAddress) {
    if (address) {
      const filteredAddress = Object.keys(address)
        .filter((key) => !["wardNo", "zipCode"].includes(key))
        .reduce((obj, key) => {
          obj[key] = address[key];
          return obj;
        }, {});
      return Object.values(filteredAddress).filter(Boolean).join(", ");
    }
  }

  setStatusSelectForm() {
    this.statusUpdateForm = this.formBuilder.group({
      statusSelect: [],
    });
  }

  onUpdateStatus(statusChange: MatSelectChange) {
    if (this.propertyDetails?.status !== statusChange.value) {
      const params = {
        status: statusChange.value,
      };
      const options = {
        message: this.getTranslatedString("confirm_status_change"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(updatePropertyStatus({ propertyId: this.propertyDetails.id, params }));
        } else {
          this.resetInitialStatus();
        }
      });
    }
  }

  resetInitialStatus() {
    this.statusUpdateForm.get("statusSelect").setValue(this.propertyDetails?.status);
  }

  showStatusUpdateForm() {
    return this.propertyDetails?.status !== "VERIFIED";
  }

  isUpdateDisabled() {
    return this.propertyDetails?.ownerStatus !== "VERIFIED";
  }
}
