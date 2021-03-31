import { Component, Input, OnInit } from "@angular/core";
import { IPrivacyPolicy } from "@shared/interfaces/privacy-policy";
import { Observable } from "rxjs";

@Component({
  selector: "app-privacy-policy-public",
  templateUrl: "./privacy-policy-public.component.html",
  styleUrls: ["./privacy-policy-public.component.scss"],
})
export class PrivacyPolicyPublicComponent implements OnInit {
  @Input() privacyPolicy$: Observable<IPrivacyPolicy>;
  privacyPolicyDescription: string = "";

  constructor() {}

  ngOnInit(): void {
    this.privacyPolicy$.subscribe((policy) => {
      if (policy) {
        this.privacyPolicyDescription = policy.description;
      }
    });
  }
}
