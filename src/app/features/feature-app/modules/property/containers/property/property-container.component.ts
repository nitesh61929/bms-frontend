import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { Observable } from "rxjs";

@Component({
  selector: "app-property-container",
  templateUrl: "./property-container.component.html",
})
export class PropertyContainerComponent extends BaseComponent implements OnInit {
  propertyDetail$: Observable<IProperty>;
  activePropertyId: string;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
    this.storage.watchStorage().subscribe((d) => {
      this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
      this.getPropertyDetail();
    });
    this.getPropertyDetail();
    this.propertyDetail$ = this.store.select((store) => store.sharedModule.property.detail);
  }

  getPropertyDetail() {
    if (this.activePropertyId) {
      // this.store.dispatch(getPropertyDetail({}));
    }
  }
}
