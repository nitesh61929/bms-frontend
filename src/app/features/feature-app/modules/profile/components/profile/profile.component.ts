import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import { StorageService } from "@core/services";
import { PermissionsService } from "@core/services/permissions/permissions.service";
import { Store } from "@ngrx/store";
import { IOwnerDetails } from "@shared/interfaces/owner-details";
import { IProfile } from "@shared/interfaces/profile";
import { Observable } from "rxjs";
import { ITrialDates } from "../../interfaces/trial-dates";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent extends BaseComponent implements OnInit {
  @Input() myProfile$: Observable<IProfile>;
  @Input() companyDetail$: Observable<IOwnerDetails>;
  @Input() error$: Observable<Error>;
  @Input() companyProfileError$: Observable<Error>;
  @Input() billingDetail$: Observable<ITrialDates>;
  @Input() billingDetailError$: Observable<Error>;
  userProfile: IProfile;
  profilePictureForm: FormGroup;
  userId: string;
  userHasPassword: boolean;
  hasTrialDatePermission = AppPermissions.TRIAL_DATE;

  constructor(
    private store: Store<any>,
    private storageService: StorageService,
    protected permissionService: PermissionsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.userHasPassword = JSON.parse(this.storageService.get("has_password"));

    this.myProfile$.subscribe((userProfile) => {
      if (userProfile) {
        this.userProfile = userProfile;
        this.userId = userProfile?.userId;
      }
    });
  }

  hasAccountDetailAccess() {
    let editBool = false;
    let editOnboardBool = false;
    let viewBool = false;

    const editBool$ = this.permissionService.checkAuthorization(AppPermissions.OWNER_EDIT);
    editBool$.subscribe((b) => {
      editBool = b;
    });

    const editOnboardBool$ = this.permissionService.checkAuthorization(AppPermissions.OWNER_ON_BOARD);
    editOnboardBool$.subscribe((b) => {
      editOnboardBool = b;
    });

    const viewBool$ = this.permissionService.checkAuthorization(AppPermissions.OWNER_DETAIL);
    viewBool$.subscribe((b) => {
      viewBool = b;
    });
    return (editBool || editOnboardBool) && viewBool;
  }
}
