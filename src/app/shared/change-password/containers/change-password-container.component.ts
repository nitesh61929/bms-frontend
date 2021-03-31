import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { ICreateUpdatePassword } from "@shared/interfaces";
import { updatePassword } from "@shared/store/actions/profile.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-change-password-container",
  templateUrl: "./change-password-container.component.html",
  styleUrls: ["./change-password-container.component.scss"],
})
export class ChangePasswordContainerComponent extends BaseComponent implements OnInit {
  error$: Observable<Error>;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.error$ = this.store.select((store) => store.sharedModule.profile.error);
  }

  onChangePassword(changePasswordPayload: ICreateUpdatePassword) {
    this.store.dispatch(updatePassword({ payload: changePasswordPayload }));
  }
}
