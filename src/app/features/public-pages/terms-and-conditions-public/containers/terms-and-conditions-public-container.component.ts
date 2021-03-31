import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ITermsAndConditions } from "@shared/interfaces/terms-and-conditions";
import { getTermsAndConditions } from "@shared/store/actions/admin-settings.actions";
import { Observable } from "rxjs";
import { BaseComponent } from "../../../../core/components/base.component";

@Component({
  selector: "app-terms-and-conditions-public-container",
  templateUrl: "./terms-and-conditions-public-container.component.html",
  styleUrls: ["./terms-and-conditions-public-container.component.scss"],
})
export class TermsAndConditionsPublicContainerComponent extends BaseComponent implements OnInit {
  termsAndConditions$: Observable<ITermsAndConditions>;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.termsAndConditions$ = this.store.select((store) => store.sharedModule.adminSettings.termsAndConditions);
    this.getTermsAndConditions();
  }

  getTermsAndConditions() {
    this.store.dispatch(getTermsAndConditions({}));
  }
}
