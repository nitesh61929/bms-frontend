import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { AdminAccountsEffects } from "./admin-accounts.effects";

describe("AdminAccountsEffects", () => {
  let actions$: Observable<any>;
  let effects: AdminAccountsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAccountsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AdminAccountsEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
