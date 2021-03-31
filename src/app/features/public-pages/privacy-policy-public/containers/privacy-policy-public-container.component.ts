import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IPrivacyPolicy } from "@shared/interfaces/privacy-policy";
import { getPrivacyPolicy } from "@shared/store/actions/admin-settings.actions";
import { Observable } from "rxjs";
import { BaseComponent } from "../../../../core/components/base.component";

@Component({
  selector: "app-privacy-policy-public-container",
  templateUrl: "./privacy-policy-public-container.component.html",
  styleUrls: ["./privacy-policy-public-container.component.scss"],
})
export class PrivacyPolicyPublicContainerComponent extends BaseComponent implements OnInit {
  privacyPolicy$: Observable<IPrivacyPolicy>;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.privacyPolicy$ = this.store.select((store: any) => store.sharedModule.adminSettings.privacyPolicy);
    this.getPrivacyPolicy();
  }

  getPrivacyPolicy() {
    this.store.dispatch(getPrivacyPolicy({}));
  }
}
