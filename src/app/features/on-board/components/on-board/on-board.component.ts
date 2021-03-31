import { Component, OnInit } from "@angular/core";
import { StorageKeys } from "@core/enums";
import { BaseComponent } from "./../../../../core/components/base.component";
import { AppRoutes } from "./../../../../core/enums/app-routes";

@Component({
  selector: "app-on-board",
  templateUrl: "./on-board.component.html",
})
export class OnBoardComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    if (
      !this.storage.get(StorageKeys.REDIRECT_TO_ONBOARD_OWNER) &&
      !this.storage.get(StorageKeys.REDIRECT_TO_ONBOARD_PROPERTY)
    ) {
      this.router.navigateByUrl(AppRoutes.DASHBOARD);
    }
  }
}
