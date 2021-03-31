import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";

@Component({
  selector: "app-internal-server-error",
  templateUrl: "./internal-server-error.component.html",
})
export class InternalServerErrorComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

  redirectToDefaultPage() {
    this.router.navigateByUrl(AppRoutes.ROOT);
  }
}
