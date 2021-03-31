import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { getPropertyDetail } from "@shared/store/actions/property.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-unit-config-container",
  templateUrl: "./unit-config-container.component.html",
  styleUrls: ["./unit-config-container.component.scss"],
})
export class UnitConfigContainerComponent extends BaseComponent implements OnInit {
  propertyDetail$: Observable<IProperty>;
  activePropertyId: string;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.propertyDetail$ = this.store.select((store) => store.sharedModule.property.detail);
    this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
    this.storage.watchStorage().subscribe((d) => {
      this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
      this.getPropertyDetail();
    });
    this.getPropertyDetail();
  }

  getPropertyDetail() {
    if (this.activePropertyId) {
      this.store.dispatch(getPropertyDetail({}));
    }
  }
}
