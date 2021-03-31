import { TestBed } from "@angular/core/testing";

import { NegateAdminAuthGuard } from "./negate-admin-auth.guard";

describe("NegateAdminAuthGuard", () => {
  let guard: NegateAdminAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NegateAdminAuthGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
