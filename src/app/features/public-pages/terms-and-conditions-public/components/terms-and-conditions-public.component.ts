import { Component, Input, OnInit } from "@angular/core";
import { ITermsAndConditions } from "@shared/interfaces/terms-and-conditions";
import { Observable } from "rxjs";

@Component({
  selector: "app-terms-and-conditions-public",
  templateUrl: "./terms-and-conditions-public.component.html",
  styleUrls: ["./terms-and-conditions-public.component.scss"],
})
export class TermsAndConditionsPublicComponent implements OnInit {
  @Input() termsAndConditions$: Observable<ITermsAndConditions>;
  termsAndConditionsDescription: string = "";

  constructor() {}

  ngOnInit(): void {
    this.termsAndConditions$.subscribe((termsAndConditions) => {
      if (termsAndConditions) {
        this.termsAndConditionsDescription = termsAndConditions.description;
      }
    });
  }
}
