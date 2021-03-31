import { TestBed } from '@angular/core/testing';

import { PasswordGuard } from './password.guard';

describe('PasswordGuard', () => {
  let guard: PasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
