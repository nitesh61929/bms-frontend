import { Component, Input, OnInit } from "@angular/core";
import { AppRoutes } from "@core/enums";
import { Store } from "@ngrx/store";
import { logoutUser } from "app/features/auth/store/actions/auth.actions";
import { BaseComponent } from "./../../core/components/base.component";

@Component({
  selector: "app-login-section",
  templateUrl: "./login-section.component.html",
})
export class LoginSectionComponent extends BaseComponent implements OnInit {
  @Input() showLogoutIcon: boolean;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {}

  onLogout() {
    const options = {
      message: this.getTranslatedString("confirm_logout"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(logoutUser({}));
        localStorage.clear();
        this.snackBar.open(this.translate.instant("logout_success"));
        this.router.navigateByUrl(AppRoutes.REGISTRATION_PAGE);
      }
    });
  }
}
