import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-design-individual-owner-detail",
  templateUrl: "./design-individual-owner-detail.component.html",
  styles: [],
})
export class DesignIndividualOwnerDetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickRedirectTo() {
    this.router.navigate(["/designs/site-type"]);
  }
}
