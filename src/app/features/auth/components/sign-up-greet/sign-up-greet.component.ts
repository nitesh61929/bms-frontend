import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import Utils from "@core/utilities/utils";

@Component({
  selector: "app-sign-up-greet",
  templateUrl: "./sign-up-greet.component.html",
  styleUrls: ["./sign-up-greet.component.scss"],
})
export class SignUpGreetComponent extends BaseComponent implements OnInit {
  playStoreUrl: string = "https://play.google.com/store/apps/details?id=com.ownant.tenant";
  appStoreUrl: string = "";
  constructor() {
    super();
  }

  ngOnInit(): void {}

  isIOS() {
    return Utils.getUserBrowserOS() == "ios";
  }

  isAndroid() {
    return Utils.getUserBrowserOS() == "android";
  }
}
