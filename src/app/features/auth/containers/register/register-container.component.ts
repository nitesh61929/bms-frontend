import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components/base.component";
import { AppRoutes } from "@core/enums";
import { IRegisterMobileNumberPayload } from "@core/interfaces/register-mobile-number-payload";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { registerMobileNumber, registerMobileNumberSuccess } from "../../store/actions/auth.actions";

@Component({
  selector: "app-register-container",
  templateUrl: "./register-container.component.html",
})
export class RegisterContainerComponent extends BaseComponent implements OnInit {
  destroyed$ = new Subject<boolean>();
  registerPayload: IRegisterMobileNumberPayload;
  error$: Observable<Error>;

  constructor(private store: Store<any>, verifyMobileNumberSuccess$: Actions) {
    super();
    verifyMobileNumberSuccess$
      .pipe(ofType(registerMobileNumberSuccess(null)), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.router.navigate([`${AppRoutes.LOGIN_PAGE}`], {
          queryParams: { mobileNumber: this.registerPayload.mobileNumber },
        });
      });
  }

  ngOnInit(): void {
    this.error$ = this.store.select((store) => store.auth.error);
  }

  onRegisterMobileNumber(registerMobileNumberPayload: IRegisterMobileNumberPayload) {
    this.registerPayload = registerMobileNumberPayload;
    this.store.dispatch(registerMobileNumber({ payload: registerMobileNumberPayload }));
  }
}
