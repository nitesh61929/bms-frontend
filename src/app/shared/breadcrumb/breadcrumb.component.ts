import { Component, Input, OnInit } from "@angular/core";
import { IBreadcrumb } from "./breadcrumb";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbsList: Array<IBreadcrumb>;
  constructor() {}

  ngOnInit(): void {}
}
