import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";

@Component({
  selector: "app-admin-auth",
  templateUrl: "./admin-auth.component.html",
})
export class AdminAuthComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.tawkService.SetChatVisibility(false);
  }
}
