import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { loadPropertyType } from "@shared/store/actions/property.actions";
import { Observable } from "rxjs";
import { IPropertyType } from "./../../interfaces/property-type";
import { getOwnerDetail } from "./../../store/actions/on-board.actions";

@Component({
  selector: "app-property-type-container",
  templateUrl: "./property-type-container.component.html",
})
export class PropertyTypeContainerComponent extends BaseComponent implements OnInit {
  ownerId: string;
  pathName: string;
  propertyTypes$: Observable<IPropertyType[]>;
  ownerDetail: any;

  constructor(private store: Store<any>) {
    super();
    this.router.events.subscribe((val) => {
      this.pathName = location.pathname;
    });
  }

  ngOnInit(): void {
    this.propertyTypes$ = this.store.select((store) => store.sharedModule.property.propertyTypes);
    this.store.dispatch(loadPropertyType(null));
    this.listenObservables();
    if (this.storage.get(StorageKeys.OWNER)) {
      const ownerId = this.storage.get(StorageKeys.OWNER).id;
      this.store.dispatch(getOwnerDetail({ id: ownerId }));
    }
  }

  listenObservables() {
    this.store
      .select((store) => store.onBoard.ownerDetail)
      .subscribe((ownerDetail) => {
        if (ownerDetail) {
          this.ownerDetail = ownerDetail;
        }
      });
  }
}
