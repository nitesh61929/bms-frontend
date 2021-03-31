import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IOwnerDetails } from "@shared/interfaces/owner-details";
import { IProfile } from "@shared/interfaces/profile";
import {
  getBillingDetail,
  getCompanyDetail,
  getProfileDetails,
  updateCompanyDetailsSuccess,
  updateProfileDetailsSuccess,
  updateVerifiedCompanyDetailsSuccess,
} from "@shared/store/actions/profile.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ITrialDates } from "../../interfaces/trial-dates";

@Component({
  selector: "app-profile-container",
  templateUrl: "./profile-container.component.html",
})
export class ProfileContainerComponent extends BaseComponent implements OnInit {
  myProfile$: Observable<IProfile>;
  companyDetail$: Observable<IOwnerDetails>;
  error$: Observable<Error>;
  companyProfileError$: Observable<Error>;
  billingDetail$: Observable<ITrialDates>;
  billingDetailError$: Observable<Error>;
  destroyed$ = new Subject<boolean>();

  constructor(
    private store: Store<any>,
    updateProfileDetailsSuccess$: Actions,
    updateVerifiedCompanyDetailsSuccess$: Actions,
    updateCompanyDetailsSuccess$: Actions
  ) {
    super();

    updateProfileDetailsSuccess$
      .pipe(ofType(updateProfileDetailsSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.getMyProfileDetail();
      });

    updateVerifiedCompanyDetailsSuccess$
      .pipe(ofType(updateVerifiedCompanyDetailsSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.getCompanyDetail();
      });

    updateCompanyDetailsSuccess$
      .pipe(ofType(updateCompanyDetailsSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.getCompanyDetail();
      });
  }
  ngOnInit(): void {
    this.getMyProfileDetail();
    this.getCompanyDetail();
    this.getUserBillingDetail();
    this.myProfile$ = this.store.select((store) => store.sharedModule.profile.detail);
    this.companyDetail$ = this.store.select((store) => store.sharedModule.profile.companyDetail);
    this.error$ = this.store.select((store) => store.sharedModule.profile.profileError);
    this.companyProfileError$ = this.store.select((store) => store.sharedModule.profile.companyProfileError);
    this.billingDetail$ = this.store.select((store) => store.sharedModule.profile.billingDetail);
    this.billingDetailError$ = this.store.select((store) => store.sharedModule.profile.billingDetailError);
  }

  getMyProfileDetail() {
    this.store.dispatch(getProfileDetails({}));
  }

  getCompanyDetail() {
    const ownerId = this.storage.get(StorageKeys.OWNER).id;
    this.store.dispatch(getCompanyDetail({ id: ownerId }));
  }

  getUserBillingDetail() {
    this.store.dispatch(getBillingDetail({}));
  }
}
