import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
})
export class PageTitleComponent implements OnInit {
  // Page title translation string
  @Input() pageTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
