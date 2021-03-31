import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AdminUsersEffects } from './admin-users.effects';

describe('AdminUsersEffects', () => {
  let actions$: Observable<any>;
  let effects: AdminUsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminUsersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AdminUsersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
