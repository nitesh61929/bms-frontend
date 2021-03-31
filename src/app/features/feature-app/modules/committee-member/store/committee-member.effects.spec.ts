import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { CommitteeMemberEffects } from "./committee-member.effects";

describe("CommitteeMemberEffects", () => {
  let actions$: Observable<any>;
  let effects: CommitteeMemberEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitteeMemberEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CommitteeMemberEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
