import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { createHelpAndSupport } from "../../store/actions/help-and-support.actions";

@Component({
  selector: "app-help-and-support-container",
  templateUrl: "./help-and-support-container.component.html",
  styleUrls: ["./help-and-support-container.component.scss"],
})
export class HelpAndSupportContainerComponent extends BaseComponent implements OnInit {
  error$: Observable<Error>;
  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.error$ = this.store.select((store) => store.helpAndSupport.error);
  }

  onCreateTicket(payload: any) {
    this.store.dispatch(createHelpAndSupport({ payload }));
  }
}
