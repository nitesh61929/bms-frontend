import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { IProfile } from "@shared/interfaces/profile";
import { Observable } from "rxjs";

@Component({
  selector: "app-admin-profile",
  templateUrl: "./admin-profile.component.html",
  styleUrls: ["./admin-profile.component.scss"],
})
export class AdminProfileComponent extends BaseComponent implements OnInit {
  @Input() profileDetails$: Observable<IProfile>;
  @Input() error$: Observable<Error>;
  profileDetails: IProfile;
  userType: string = "Administrator";

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.profileDetails$) {
      this.profileDetails$.subscribe((details) => {
        this.profileDetails = details;
      });
    }
  }
}
