import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes, StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { updatePassword } from "@shared/store/actions/profile.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ICreateUpdatePassword } from "./../../../../shared/interfaces/create-update-password";
import { updatePasswordSuccess } from "./../../../../shared/store/actions/profile.actions";

@Component({
  selector: "app-update-password-container",
  templateUrl: "./update-password-container.component.html",
})
export class UpdatePasswordContainerComponent extends BaseComponent implements OnInit {
  destroyed$ = new Subject<boolean>();
  error$: Observable<Error>;

  constructor(private store: Store<any>, updatePasswordSuccess$: Actions) {
    super();

    updatePasswordSuccess$.pipe(ofType(updatePasswordSuccess), takeUntil(this.destroyed$)).subscribe((res: any) => {
      this.storage.set(StorageKeys.HAS_CHANGED_PASSWORD, true);
      this.redirectTo(AppRoutes.ON_BOARD_OWNER_COMPANY);
    });
  }

  ngOnInit(): void {
    if (!this.storage.get("token")) {
      this.redirectTo(AppRoutes.ROOT);
    }
    this.error$ = this.store.select((store) => store.sharedModule.profile.error);
  }

  onUpdatePassword(updatePasswordPayload: ICreateUpdatePassword) {
    this.store.dispatch(updatePassword({ payload: updatePasswordPayload }));
  }
}
