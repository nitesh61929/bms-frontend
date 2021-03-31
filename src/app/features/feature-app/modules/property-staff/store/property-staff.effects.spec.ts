import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PropertyStaffEffects } from './property-staff.effects';

describe('PropertyStaffEffects', () => {
  let actions$: Observable<any>;
  let effects: PropertyStaffEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PropertyStaffEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PropertyStaffEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
