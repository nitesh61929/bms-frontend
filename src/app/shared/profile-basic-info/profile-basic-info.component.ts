import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { IAddress } from "@shared/interfaces/address";
import { IProfile } from "@shared/interfaces/profile";
import { uploadProfilePicture } from "@shared/store/actions/profile.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-profile-basic-info",
  templateUrl: "./profile-basic-info.component.html",
  styleUrls: ["./profile-basic-info.component.scss"],
})
export class ProfileBasicInfoComponent extends BaseComponent implements OnInit {
  @Input() myProfile$: Observable<IProfile>;
  @Input() userType: string;
  userProfile: IProfile;
  profilePictureForm: FormGroup;
  userId: string;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.setProfilePictureForm();
    if (this.myProfile$) {
      this.myProfile$.subscribe((userProfile) => {
        if (userProfile) {
          this.userProfile = userProfile;
          this.userId = userProfile?.userId;
          this.profilePictureForm.get("profilePicture").setValue(this.userProfile?.profileFile);
        }
      });
    }
  }

  setProfilePictureForm() {
    this.profilePictureForm = this.formBuilder.group({
      id: ["", Validators.required],
      profilePicture: [
        "",
        [CustomValidators.requiredFileType(["png", "jpg", "jpeg"]), CustomValidators.requiredFileSize(5120)],
      ],
    });
  }

  onFileUpload(fileData: any) {
    this.profilePictureForm.get("id").setValue(this.userId);
    if (this.profilePictureForm.valid) {
      this.store.dispatch(uploadProfilePicture({ payload: this.profilePictureForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  getAddress(address: IAddress) {
    if (address) {
      const filteredAddress = Object.keys(address)
        .filter((key) => !["wardNo", "zipCode"].includes(key))
        .reduce((obj, key) => {
          obj[key] = address[key];
          return obj;
        }, {});
      return Object.values(filteredAddress).filter(Boolean).join(", ");
    }
  }
}
