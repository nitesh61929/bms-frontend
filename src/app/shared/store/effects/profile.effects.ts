import { Injectable } from "@angular/core";
import { StorageKeys } from "@core/enums";
import { SnackBarService, StorageService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as ProfileActions from "../actions//profile.actions";
import { ProfileService } from "./../../services/profile/profile.service";
import { getProfileDetails } from "./../actions/profile.actions";

@Injectable()
export class ProfileEffects {
  getProfileDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getProfileDetails),
      exhaustMap((action) =>
        this.profileService.getProfileDetails().pipe(
          map((response: any) => ProfileActions.getProfileDetailsSuccess(response)),
          catchError((error) => of(ProfileActions.getProfileDetailsFailure({ error })))
        )
      )
    )
  );

  updateProfileDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateProfileDetails),
      exhaustMap((action) =>
        this.profileService.updateProfileDetails(action.payload).pipe(
          map((response: any) => ProfileActions.updateProfileDetailsSuccess(response)),
          catchError((error) => of(ProfileActions.updateProfileDetailsFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateProfileDetailsSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.updateProfileDetailsSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("profile_update_success"));
      this.store.dispatch(getProfileDetails({}));
    })
  );

  getCompanyDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.getCompanyDetail),
      exhaustMap((action) =>
        this.profileService.getCompanyDetail(action.id).pipe(
          map((response: any) => ProfileActions.getCompanyDetailSuccess(response)),
          catchError((error) => of(ProfileActions.getCompanyDetailFailure({ error })))
        )
      )
    );
  });

  updateCompanyDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateCompanyDetails),
      exhaustMap((action) =>
        this.profileService.updateCompanyDetails(action.payload).pipe(
          map((response: any) => ProfileActions.updateCompanyDetailsSuccess(response)),
          catchError((error) => of(ProfileActions.updateCompanyDetailsFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateCompanyDetailsSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.updateCompanyDetailsSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("profile_update_success"));
      const ownerId = this.storage.get(StorageKeys.OWNER).id;
      this.store.dispatch(ProfileActions.getCompanyDetail({ id: ownerId }));
    })
  );

  updateVerifiedCompanyDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateVerifiedCompanyDetails),
      exhaustMap((action) =>
        this.profileService.updateVerifiedCompanyDetails(action.payload).pipe(
          map((response: any) => ProfileActions.updateVerifiedCompanyDetailsSuccess(response)),
          catchError((error) => of(ProfileActions.updateVerifiedCompanyDetailsFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateVerifiedCompanyDetailsSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.updateVerifiedCompanyDetailsSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("profile_update_success"));
      const ownerId = this.storage.get(StorageKeys.OWNER).id;
      this.store.dispatch(ProfileActions.getCompanyDetail({ id: ownerId }));
    })
  );

  uploadProfilePicture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.uploadProfilePicture),
      exhaustMap((action) =>
        this.profileService.uploadProfilePicture(action.payload).pipe(
          map((response: any) => ProfileActions.uploadProfilePictureSuccess(response)),
          catchError((error) => of(ProfileActions.uploadProfilePictureFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  uploadProfilePictureSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.uploadProfilePictureSuccess),
    map((res: any) => {
      // this.snackBar.open(this.translate.instant("profile_picture_update_success"));
    })
  );

  updatePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updatePassword),
      exhaustMap((action) =>
        this.profileService.updatePassword(action.payload).pipe(
          map((response: any) => ProfileActions.updatePasswordSuccess(response)),
          catchError((error) => of(ProfileActions.updatePasswordFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updatePasswordSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.updatePasswordSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("password_update_success"));
    })
  );

  createPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.createPassword),
      exhaustMap((action) =>
        this.profileService.createPassword(action.payload).pipe(
          map((response: any) => ProfileActions.createPasswordSuccess(response)),
          catchError((error) => of(ProfileActions.createPasswordFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  createPasswordSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.createPasswordSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("password_create_success"));
    })
  );

  updateProfileCredential$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateProfileCredential),
      exhaustMap((action) =>
        this.profileService.updateProfileCredential(action.payload).pipe(
          map((response: any) => ProfileActions.updateProfileCredentialSuccess(response)),
          catchError((error) => of(ProfileActions.updateProfileCredentialFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateProfileCredentialSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.updateProfileCredentialSuccess),
    map((res: any) => {
      if (res.data.hasOwnProperty("mobileNumber")) {
        this.snackBar.open(this.translate.instant("verification_otp_sent"));
      } else {
        this.snackBar.open(this.translate.instant("verification_code_sent"));
      }
    })
  );

  verifyProfileCredential$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.verifyProfileCredential),
      exhaustMap((action) =>
        this.profileService.verifyProfileCredential(action.payload).pipe(
          map((response: any) => ProfileActions.verifyProfileCredentialSuccess(response)),
          catchError((error) => of(ProfileActions.verifyProfileCredentialFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  verifyProfileCredentialSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.verifyProfileCredentialSuccess),
    map((res: any) => {
      if (res && res.data && res.data.email) {
        this.snackBar.open(this.translate.instant("email_verified_success"));
      } else {
        this.snackBar.open(this.translate.instant("mobile_verified_success"));
      }
      this.store.dispatch(getProfileDetails({}));
    })
  );

  getBillingDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.getBillingDetail),
      exhaustMap((action) =>
        this.profileService.getBillingDetail().pipe(
          map((response: any) => ProfileActions.getBillingDetailSuccess(response)),
          catchError((error) => of(ProfileActions.getBillingDetailFailure({ error })))
        )
      )
    );
  });

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.forgotPassword),
      exhaustMap((action) =>
        this.profileService.forgotPassword(action.payload).pipe(
          map((response: any) => ProfileActions.forgotPasswordSuccess(response)),
          catchError((error) => of(ProfileActions.forgotPasswordFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  forgotPasswordSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.forgotPasswordSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("forgot_password_requested"));
    })
  );

  verifyForgotPasswordLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.verifyForgotPasswordLink),
      exhaustMap((action) =>
        this.profileService.verifyForgotPasswordLink(action.payload).pipe(
          map((response: any) => ProfileActions.verifyForgotPasswordLinkSuccess(response)),
          catchError((error) => of(ProfileActions.verifyForgotPasswordLinkFailure({ error })))
        )
      )
    )
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.resetPassword),
      exhaustMap((action) =>
        this.profileService.resetPassword(action.payload).pipe(
          map((response: any) => ProfileActions.resetPasswordSuccess(response)),
          catchError((error) => of(ProfileActions.resetPasswordFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  resetPasswordSuccess = this.actions$.pipe(
    ofType<any>(ProfileActions.resetPasswordSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("reset_password_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private storage: StorageService
  ) {}
}
