import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { IProfile } from "@shared/interfaces/profile";
import { getProfileDetails } from "@shared/store/actions/profile.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-admin-profile-container",
  templateUrl: "./admin-profile-container.component.html",
  styleUrls: ["./admin-profile-container.component.scss"],
})
export class AdminProfileContainerComponent extends BaseComponent implements OnInit {
  profileDetails$: Observable<IProfile>;
  error$: Observable<Error>;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.profileDetails$ = this.store.select((store) => store.sharedModule.profile.detail);
    this.error$ = this.store.select((store) => store.sharedModule.profile.error);
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.store.dispatch(getProfileDetails({}));
  }
}
