import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAddress } from "@shared/interfaces/address";
import { Observable } from "rxjs";
import { IResidenceVehicle } from "../../interfaces/residence-vehicle";
import { IResidenceDetail } from "./../../interfaces/residence-detail";
import { ResidencesService } from "./../../services/residence.service";
import { getResidenceDetail } from "./../../store/actions/residence.actions";

@Component({
  selector: "app-residence-detail",
  templateUrl: "./residence-detail.component.html",
})
export class ResidenceDetailComponent implements OnInit {
  @Input() residenceId: string;
  @Input() unitId: string;
  residenceDetail$: Observable<IResidenceDetail>;
  residenceDetail: IResidenceDetail;
  residenceFourWheelerVehicles: IResidenceVehicle[] = [];
  residenceTwoWheelerVehicles: IResidenceVehicle[] = [];
  constructor(private store: Store<any>, protected residenceService: ResidencesService) {}

  ngOnInit(): void {
    this.residenceDetail$ = this.store.select((store) => store.residence.detail);
    if (this.residenceId && this.unitId) {
      this.store.dispatch(getResidenceDetail({ residenceId: this.residenceId, unitId: this.unitId }));
      this.listenObservables();
    }
  }

  listenObservables() {
    this.residenceDetail$.subscribe((residenceDetail) => {
      if (residenceDetail) {
        this.residenceDetail = residenceDetail;
        this.residenceFourWheelerVehicles = this.residenceDetail?.vehicles.filter(
          (vehicle) => vehicle.vehicleType == this.residenceService.fourWheelerVehicleType
        );
        this.residenceTwoWheelerVehicles = this.residenceDetail?.vehicles.filter(
          (vehicle) => vehicle.vehicleType == this.residenceService.twoWheelerVehicleType
        );
      }
    });
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
}
