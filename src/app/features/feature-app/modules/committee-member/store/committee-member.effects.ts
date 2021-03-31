import { Injectable } from "@angular/core";
import { StorageService } from "@core/services";
import { SnackBarService } from "@core/services/snack-bar";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { CommitteeMemberService } from "../services/committee-member.service";
import * as CommitteeMemberActions from "./committee-member.actions";

@Injectable()
export class CommitteeMemberEffects {
  getpropertyDesignations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommitteeMemberActions.getPropertyDesignations),
      exhaustMap((action) =>
        this.committeeMemberService.getPropertyDesignations().pipe(
          map((response: any) => CommitteeMemberActions.getPropertyDesignationsSuccess(response)),
          catchError((error) => of(CommitteeMemberActions.getPropertyDesignationsFailure({ error })))
        )
      )
    )
  );
  /**
   * Fetch all the committe members of a property.
   */
  loadAllPropertyUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommitteeMemberActions.loadAllPropertyUsers),
      exhaustMap((action) =>
        this.committeeMemberService.getAllPropertyUsers(action.params).pipe(
          map((response: any) => CommitteeMemberActions.loadAllPropertyUsersSuccess(response)),
          catchError((error) => of(CommitteeMemberActions.loadAllPropertyUsersFailure({ error })))
        )
      )
    )
  );

  /**
   * Fetch all the committe members of a property.
   */
  loadPropertyCommitteeMembers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommitteeMemberActions.loadPropertyCommitteeMembers),
      exhaustMap((action) =>
        this.committeeMemberService.getPropertyCommitteeMembers(action.params).pipe(
          map((response: any) => CommitteeMemberActions.loadPropertyCommitteeMembersSuccess(response)),
          catchError((error) => of(CommitteeMemberActions.loadPropertyCommitteeMembersFailure({ error })))
        )
      )
    )
  );

  assignCommitteeMemberToProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommitteeMemberActions.assignCommitteeMemberToProperty),
      exhaustMap((action) =>
        this.committeeMemberService.assignCommitteeMemberToProperty(action.payload).pipe(
          map((response: any) => CommitteeMemberActions.assignCommitteeMemberToPropertySuccess(response)),
          catchError((error) => of(CommitteeMemberActions.assignCommitteeMemberToPropertyFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  assignCommitteeMemberToPropertySuccess = this.actions$.pipe(
    ofType<any>(CommitteeMemberActions.assignCommitteeMemberToPropertySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("committee_member_assign_success"));
    })
  );

  removeCommitteeMemberFromProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommitteeMemberActions.removeCommitteeMemberFromProperty),
      exhaustMap((action) =>
        this.committeeMemberService.removeCommitteeMemberFromProperty(action.committeeMemberId).pipe(
          map((response: any) => CommitteeMemberActions.removeCommitteeMemberFromPropertySuccess(response)),
          catchError((error) => of(CommitteeMemberActions.removeCommitteeMemberFromPropertyFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  removeCommitteeMemberFromPropertySuccess = this.actions$.pipe(
    ofType<any>(CommitteeMemberActions.removeCommitteeMemberFromPropertySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("committee_member_remove_success"));
    })
  );

  updateCommitteeMemberDesignation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommitteeMemberActions.updateCommitteeMemberDesignation),
      exhaustMap((action) =>
        this.committeeMemberService.updateCommitteeMemberDesignation(action.committeeMemberId, action.params).pipe(
          map((response: any) => CommitteeMemberActions.updateCommitteeMemberDesignationSuccess(response)),
          catchError((error) => of(CommitteeMemberActions.updateCommitteeMemberDesignationFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateCommitteeMemberDesignationSuccess = this.actions$.pipe(
    ofType<any>(CommitteeMemberActions.updateCommitteeMemberDesignationSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("designation_update_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private committeeMemberService: CommitteeMemberService,
    private translate: TranslateService,
    private snackBar: SnackBarService,
    private store: Store<any>,
    private storage: StorageService
  ) {}
}
