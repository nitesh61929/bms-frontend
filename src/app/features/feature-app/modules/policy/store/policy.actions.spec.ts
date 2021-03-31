import * as fromPolicy from './policy.actions';

describe('loadPolicys', () => {
  it('should return an action', () => {
    expect(fromPolicy.loadPolicys().type).toBe('[Policy] Load Policys');
  });
});
