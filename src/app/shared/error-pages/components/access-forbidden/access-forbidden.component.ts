import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";

@Component({
  selector: "app-access-forbidden",
  templateUrl: "./access-forbidden.component.html",
})
export class AccessForbiddenComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

  redirectToDefaultPage() {
    this.router.navigateByUrl(AppRoutes.ROOT);
  }
}
