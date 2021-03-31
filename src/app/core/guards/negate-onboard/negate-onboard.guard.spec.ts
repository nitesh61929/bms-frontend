import { TestBed } from '@angular/core/testing';

import { NegateOnboardGuard } from './negate-onboard.guard';

describe('NegateOnboardGuard', () => {
  let guard: NegateOnboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NegateOnboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
