import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { PolicyService } from "../services/policy.service";
import * as PolicyActions from "./policy.actions";

@Injectable()
export class PolicyEffects {
  loadPolicies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PolicyActions.loadPolicies),
      exhaustMap((action) =>
        this.policyService.getPolicies(action.params).pipe(
          map((response: any) => PolicyActions.loadPoliciesSuccess(response)),
          catchError((error) => of(PolicyActions.loadPoliciesFailure({ error })))
        )
      )
    );
  });

  addPolicy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PolicyActions.addPolicy),
      exhaustMap((action) =>
        this.policyService.addPolicy(action.payload).pipe(
          map((response: any) => PolicyActions.addPolicySuccess(response)),
          catchError((error) => of(PolicyActions.addPolicyFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  addPolicySuccess = this.actions$.pipe(
    ofType<any>(PolicyActions.addPolicySuccess),
    map((policy: any) => {
      this.snackBar.open(this.translate.instant("policy_add_success"));
    })
  );

  updatePolicy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PolicyActions.updatePolicy),
      exhaustMap((action) =>
        this.policyService.updatePolicy(action.policyId, action.payload).pipe(
          map((response: any) => PolicyActions.updatePolicySuccess(response)),
          catchError((error) => of(PolicyActions.updatePolicyFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  updatePolicySuccess = this.actions$.pipe(
    ofType<any>(PolicyActions.updatePolicySuccess),
    map((policy: any) => {
      this.snackBar.open(this.translate.instant("policy_update_success"));
    })
  );

  deletePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.deletePolicy),
      exhaustMap((action) =>
        this.policyService.deletePolicy(action.policyId).pipe(
          map((response: any) => PolicyActions.deletePolicySuccess(response)),
          catchError((error) => of(PolicyActions.deletePolicyFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  deletePolicySuccess = this.actions$.pipe(
    ofType<any>(PolicyActions.deletePolicySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("policy_delete_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private policyService: PolicyService
  ) {}
}
