import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";

@Component({
  selector: "app-invalid-link",
  templateUrl: "./invalid-link.component.html",
  styleUrls: ["./invalid-link.component.scss"],
})
export class InvalidLinkComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

  redirectToDefaultPage() {
    this.redirectTo(AppRoutes.ROOT);
  }
}
