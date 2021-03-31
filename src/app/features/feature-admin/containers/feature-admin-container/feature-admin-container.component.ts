import { Component, OnInit } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { BaseComponent } from "@core/components";

@Component({
  selector: "app-feature-admin-container",
  templateUrl: "./feature-admin-container.component.html",
  styleUrls: ["./feature-admin-container.component.scss"],
})
export class FeatureAdminContainerComponent extends BaseComponent implements OnInit {
  currentUrl: string;
  constructor() {
    super();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url.slice(1);
      }
    });
  }

  ngOnInit(): void {}
}
