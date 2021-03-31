import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
})
export class NotFoundComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

  redirectToDefaultPage() {
    this.router.navigateByUrl(AppRoutes.ROOT);
  }
}
