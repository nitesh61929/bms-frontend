import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as InvitationsActions from "../actions/invitations.actions";
import { PropertyOwnerInvitationService } from "./../../services/property-owner-invitation/property-owner-invitation.service";

@Injectable()
export class InvitationsEffects {
  invitePropertyOwner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvitationsActions.invitePropertyOwner),
      exhaustMap((action) =>
        this.propertyOwnerInvitationService.invitePropertyOwner(action.payload).pipe(
          map((response: any) => InvitationsActions.invitePropertyOwnerSuccess(response)),
          catchError((error) => of(InvitationsActions.invitePropertyOwnerFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  invitePropertyOwnerSuccess = this.actions$.pipe(
    ofType<any>(InvitationsActions.invitePropertyOwnerSuccess),
    map((invitation: any) => {
      this.snackBar.open(this.translate.instant("invitation_sent_success"));
    })
  );

  resendInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvitationsActions.resendInvitation),
      exhaustMap((action) =>
        this.propertyOwnerInvitationService.resendInvitation(action.invitationId).pipe(
          map((response: any) => InvitationsActions.resendInvitationSuccess(response)),
          catchError((error) => of(InvitationsActions.resendInvitationFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  resendInvitationSuccess = this.actions$.pipe(
    ofType<any>(InvitationsActions.resendInvitationSuccess),
    map((invitation: any) => {
      this.snackBar.open(this.translate.instant("resend_invitation_success"));
    })
  );

  resendTenantInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvitationsActions.resendTenantInvitation),
      exhaustMap((action) =>
        this.propertyOwnerInvitationService.resendTenantInvitation(action.invitationId).pipe(
          map((response: any) => InvitationsActions.resendTenantInvitationSuccess(response)),
          catchError((error) => of(InvitationsActions.resendTenantInvitationFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  resendTenantInvitationSuccess = this.actions$.pipe(
    ofType<any>(InvitationsActions.resendTenantInvitationSuccess),
    map((invitation: any) => {
      this.snackBar.open(this.translate.instant("resend_invitation_success"));
    })
  );

  cancelTenantInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvitationsActions.cancelTenantInvitation),
      exhaustMap((action) =>
        this.propertyOwnerInvitationService.cancelTenantInvitation(action.invitationId).pipe(
          map((response: any) => InvitationsActions.cancelTenantInvitationSuccess(response)),
          catchError((error) => of(InvitationsActions.cancelTenantInvitationFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  cancelTenantInvitationSuccess = this.actions$.pipe(
    ofType<any>(InvitationsActions.cancelTenantInvitationSuccess),
    map((invitation: any) => {
      this.snackBar.open(this.translate.instant("cancel_invitation_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private propertyOwnerInvitationService: PropertyOwnerInvitationService,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private router: Router
  ) {}
}
