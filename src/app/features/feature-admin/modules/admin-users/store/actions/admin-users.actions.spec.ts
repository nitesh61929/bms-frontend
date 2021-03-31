import * as fromAdminUsers from './admin-users.actions';

describe('loadAdminUserss', () => {
  it('should return an action', () => {
    expect(fromAdminUsers.loadAdminUserss().type).toBe('[AdminUsers] Load AdminUserss');
  });
});
