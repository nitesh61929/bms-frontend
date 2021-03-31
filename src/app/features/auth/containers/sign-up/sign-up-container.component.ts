import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";
import { IVerifyMobileNumberPayload } from "@core/interfaces/verify-mobile-number-payload";
import { AuthService } from "@core/services";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { verifyMobileNumber, verifyMobileNumberSuccess } from "../../store/actions/auth.actions";

@Component({
  selector: "app-sign-up-container",
  templateUrl: "./sign-up-container.component.html",
})
export class SignUpContainerComponent extends BaseComponent implements OnInit {
  invitationId: string;
  invitationCode: string;
  destroyed$ = new Subject<boolean>();
  mobileNumberPayload: IVerifyMobileNumberPayload;
  accountType: string;
  group: string; //PROPERTY OR TENANT OWNANT

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    verifyMobileNumberSuccess$: Actions
  ) {
    super();
    verifyMobileNumberSuccess$
      .pipe(ofType(verifyMobileNumberSuccess(null)), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.redirectTo(`${AppRoutes.SIGN_UP_OTP}/${this.mobileNumberPayload.mobileNumber}`);
      });
  }

  ngOnInit(): void {
    this.getInvitationId();
  }

  private getInvitationId() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.invitationId = params.invitationId;
      this.verifyInvitation();
    });
  }

  verifyInvitation() {
    this.authService.verifyInvitation(this.invitationId).subscribe(
      (response: any) => {
        this.invitationCode = response.data.invitationCode;
        this.accountType = response.data.accountType;
        this.group = response.data.group;
        if (this.group === "TENANT") {
          this.redirectTo(AppRoutes.SIGN_UP_GREET);
        } else {
          if (this.accountType === "COMPANY") {
            this.redirectTo(AppRoutes.LOGIN_WITH_PASSWORD);
          } else {
            this.redirectTo(AppRoutes.OTP_LOGIN);
          }
        }
      },
      (err) => {
        this.redirectTo(AppRoutes.INVALID_LINK);
      }
    );
  }

  onVerifyMobileNumber(verifyMobileNumberPayload: IVerifyMobileNumberPayload) {
    this.mobileNumberPayload = verifyMobileNumberPayload;
    this.store.dispatch(verifyMobileNumber({ payload: verifyMobileNumberPayload }));
  }
}
