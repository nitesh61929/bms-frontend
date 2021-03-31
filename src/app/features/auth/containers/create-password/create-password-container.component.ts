import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes, StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ICreateUpdatePassword } from "@shared/interfaces";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { createPassword, createPasswordSuccess } from "./../../../../shared/store/actions/profile.actions";

@Component({
  selector: "app-create-password-container",
  templateUrl: "./create-password-container.component.html",
})
export class CreatePasswordContainerComponent extends BaseComponent implements OnInit {
  destroyed$ = new Subject<boolean>();
  error$: Observable<Error>;

  constructor(private store: Store<any>, createPasswordSuccess$: Actions) {
    super();

    createPasswordSuccess$.pipe(ofType(createPasswordSuccess), takeUntil(this.destroyed$)).subscribe((res: any) => {
      this.storage.set(StorageKeys.HAS_CHANGED_PASSWORD, true);
      this.storage.set(StorageKeys.HAS_PASSWORD, true);
      const owner = this.storage.get(StorageKeys.OWNER);
      if (!owner) {
        this.redirectTo(AppRoutes.ON_BOARD_OWNER_INDIVIDUAL);
      } else {
        this.redirectTo(AppRoutes.DASHBOARD);
      }
    });
  }

  ngOnInit(): void {
    this.error$ = this.store.select((store) => store.sharedModule.profile.error);
  }

  onCreatePassword(createPasswordPayload: ICreateUpdatePassword) {
    this.store.dispatch(createPassword({ payload: createPasswordPayload }));
  }
}
