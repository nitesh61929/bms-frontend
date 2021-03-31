import { Component, OnInit } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";

@Component({
  selector: "app-feature-app-container",
  templateUrl: "./feature-app-container.component.html",
  styleUrls: ["./feature-app-container.component.scss"],
})
export class FeatureAppContainerComponent extends BaseComponent implements OnInit {
  currentUrl: string;
  showSidebar: boolean = false;
  hideSidebarRoutes: any = [AppRoutes.DASHBOARD, AppRoutes.USER_PROFILE, AppRoutes.HELP_AND_SUPPORT, AppRoutes.STAFFS];

  constructor() {
    super();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url.slice(1);
        this.showSidebar = !this.hideSidebarRoutes.includes(this.currentUrl);
      }
    });
  }

  ngOnInit(): void {}
}
