import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IProperty } from "@shared/interfaces";
import { addProperty } from "@shared/store/actions/property.actions";

@Component({
  selector: "app-admin-add-property-container",
  templateUrl: "./admin-add-property-container.component.html",
})
export class AdminAddPropertyContainerComponent implements OnInit {
  breadcrumbsList: Array<IBreadcrumb>;
  constructor(private store: Store<any>) {
    this.breadcrumbsList = [
      {
        displayText: "Dashboard",
        routerLink: "/admin-dashboard",
      },
      {
        displayText: "Add Property",
        routerLink: "",
      },
    ];
  }

  ngOnInit(): void {}

  onAddProperty(addPropertyFormValue: IProperty) {
    this.store.dispatch(addProperty({ payload: addPropertyFormValue }));
  }
}
