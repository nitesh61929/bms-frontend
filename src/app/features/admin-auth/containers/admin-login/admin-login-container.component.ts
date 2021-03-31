import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IAdminAuthPayload } from "./../../../../shared/interfaces/admin-auth-payload";
import { adminLogin, adminLoginSuccess } from "./../../store/actions/admin-auth.actions";

@Component({
  selector: "app-admin-login-container",
  templateUrl: "./admin-login-container.component.html",
})
export class AdminLoginContainerComponent extends BaseComponent implements OnInit {
  destroyed$ = new Subject<boolean>();
  constructor(private store: Store<any>, adminLoginSuccess$: Actions) {
    super();

    adminLoginSuccess$.pipe(ofType(adminLoginSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      const storagePermissions = [
        "admin:active_accounts",
        "admin:get_pending_invitations",
        "property:property_all_list",
      ];
      this.storage.set(StorageKeys.PERMISSIONS, storagePermissions);
    });
  }

  ngOnInit(): void {}

  onAdminLogin(adminAuthPayload: IAdminAuthPayload) {
    this.store.dispatch(adminLogin({ payload: adminAuthPayload }));
  }
}
