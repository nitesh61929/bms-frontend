import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.tawkService.SetChatVisibility(false);
    if (this.storage.get("token")) {
      this.redirectTo(AppRoutes.DASHBOARD);
    }
  }
}
