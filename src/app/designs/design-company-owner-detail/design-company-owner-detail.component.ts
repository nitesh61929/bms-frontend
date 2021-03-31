import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-design-company-owner-detail",
  templateUrl: "./design-company-owner-detail.component.html",
  styles: [],
})
export class DesignCompanyOwnerDetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickRedirectTo() {
    this.router.navigate(["/designs/site-type"]);
  }
}
