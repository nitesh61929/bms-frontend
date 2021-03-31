import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { IOwnerDetails } from "@shared/interfaces/owner-details";
import { Observable } from "rxjs";
import { IProperty } from "./../../../interfaces/property";
import { IPropertyOwnerDetails } from "./../../../interfaces/property-owner-detail";
import { getPropertyOwnerDetail } from "./../../../store/actions/property-owner.actions";

@Component({
  selector: "app-property-owner-details-container",
  templateUrl: "./property-owner-details-container.component.html",
})
export class PropertyOwnerDetailsContainerComponent implements OnInit {
  @Input() propertyOwnerId: string;
  @Input() showStatusToggle: boolean;
  @Output() disableStatusChange: EventEmitter<any> = new EventEmitter<any>();
  propertyOwnerDetails$: Observable<any>;
  propertyOwnerDetails: IPropertyOwnerDetails;
  propertyList: IProperty[];
  owner: IOwnerDetails;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.listenObservables();
    this.getPropertyOwnerDetail();
  }

  resetData() {
    this.propertyOwnerDetails = null;
    this.owner = null;
    this.propertyList = null;
  }

  getPropertyOwnerDetail() {
    this.store.dispatch(getPropertyOwnerDetail({ id: this.propertyOwnerId }));
  }

  listenObservables() {
    this.propertyOwnerDetails$ = this.store.select((store) => store.sharedModule.propertyOwner.detail);
    this.propertyOwnerDetails$.subscribe((detail) => {
      this.resetData();
      if (detail) {
        this.propertyOwnerDetails = detail;
        if (this.propertyOwnerDetails.owners) {
          this.owner = this.propertyOwnerDetails.owners[0];
          if (this.owner.property && this.owner.property.length > 0) {
            this.propertyList = this.owner.property;
            this.disableStatusChange.emit(false);
          } else {
            this.disableStatusChange.emit(true);
          }
        } else {
          this.disableStatusChange.emit(true);
        }
      }
    });
  }
}
