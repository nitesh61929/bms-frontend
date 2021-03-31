import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { HelpAndSupportEffects } from "./effects/help-and-support.effects";

describe("HelpAndSupportEffects", () => {
  let actions$: Observable<any>;
  let effects: HelpAndSupportEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelpAndSupportEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(HelpAndSupportEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
