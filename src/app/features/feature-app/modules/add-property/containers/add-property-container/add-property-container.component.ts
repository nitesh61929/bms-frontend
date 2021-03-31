import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IProperty } from "@shared/interfaces";
import * as propertyActions from "@shared/store/actions/property.actions";
import { addProperty, loadProperty } from "@shared/store/actions/property.actions";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-add-property-container",
  templateUrl: "./add-property-container.component.html",
})
export class AddPropertyContainerComponent extends BaseComponent implements OnInit {
  breadcrumbsList: Array<IBreadcrumb>;
  destroyed$ = new Subject<boolean>();

  constructor(private store: Store<any>, public addPropertySuccess$: Actions) {
    super();
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
    addPropertySuccess$.pipe(ofType(propertyActions.addPropertySuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.fetchProperties();
    });
  }

  ngOnInit(): void {}

  onAddProperty(addPropertyFormValue: IProperty) {
    this.store.dispatch(addProperty({ payload: addPropertyFormValue }));
  }

  fetchProperties() {
    this.store.dispatch(loadProperty({}));
  }
}
