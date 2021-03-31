import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-design-oboarding-complete",
  templateUrl: "./design-oboarding-complete.component.html",
  styles: [],
})
export class DesignOboardingCompleteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickRedirectTo() {
    this.router.navigate(["/designs/dashboard"]);
  }
}
