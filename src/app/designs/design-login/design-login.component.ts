import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-design-login",
  templateUrl: "./design-login.component.html",
})
export class DesignLoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickRedirectTo() {
    this.router.navigate(["/designs/owner-type"]);
  }
}
