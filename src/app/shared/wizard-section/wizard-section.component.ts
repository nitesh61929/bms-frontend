import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { Store } from "@ngrx/store";
import { logoutUser } from "app/features/auth/store/actions/auth.actions";
import { BaseComponent } from "./../../core/components/base.component";

@Component({
  selector: "app-wizard-section",
  templateUrl: "./wizard-section.component.html",
})
export class WizardSectionComponent extends BaseComponent implements OnInit {
  @Input() pathName: string;

  constructor(router: Router, private store: Store<any>) {
    super();
  }

  ngOnInit(): void {}

  isCurrentStep(section: string) {
    if (section && this.pathName) {
      const bool = this.pathName.includes(section);
      return bool;
    }
  }

  isCompleted(section: string) {
    if (
      section === "owner-type" &&
      (this.pathName.includes("owner-detail") ||
        this.pathName.includes("property-type") ||
        this.pathName.includes("property-detail") ||
        this.pathName.includes("greet"))
    ) {
      return true;
    }
    if (
      section === "owner-detail" &&
      (this.pathName.includes("property-type") ||
        this.pathName.includes("property-detail") ||
        this.pathName.includes("greet"))
    ) {
      return true;
    }
    if (section === "property-type" && (this.pathName.includes("property-detail") || this.pathName.includes("greet"))) {
      return true;
    }
    if (section === "property-detail" && this.pathName.includes("greet")) {
      return true;
    }
    if (section === "greet") {
    }
  }

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
