import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { verifyOTP } from "../../store/actions/auth.actions";
import { IVerifyOTPPayload } from "./../../../../core/interfaces/verify-otp-payload";

@Component({
  selector: "app-sign-up-otp-container",
  templateUrl: "./sign-up-otp-container.component.html",
})
export class SignUpOtpContainerComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  onVerifyOTP(verifyOtpPayload: IVerifyOTPPayload) {
    this.store.dispatch(verifyOTP({ payload: verifyOtpPayload }));
  }
}
