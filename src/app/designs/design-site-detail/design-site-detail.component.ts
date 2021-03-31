import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-design-site-detail",
  templateUrl: "./design-site-detail.component.html",
  styles: [],
})
export class DesignSiteDetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onClickRedirectTo() {
    this.router.navigate(["/designs/onboarding-complete"]);
  }
}
