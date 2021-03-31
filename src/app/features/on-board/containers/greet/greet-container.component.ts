import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "./../../../../core/components/base.component";

@Component({
  selector: "app-greet-container",
  templateUrl: "./greet-container.component.html",
  styleUrls: ["./greet-container.component.scss"],
})
export class GreetContainerComponent extends BaseComponent implements OnInit {
  pathName: string;
  destroyed$ = new Subject<boolean>();

  constructor() {
    super();
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((val) => {
      this.pathName = location.pathname;
    });
  }

  ngOnInit(): void {}
}
