import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PolicyEffects } from './policy.effects';

describe('PolicyEffects', () => {
  let actions$: Observable<any>;
  let effects: PolicyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PolicyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PolicyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
