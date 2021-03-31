import * as fromPropertyStaff from './property-staff.actions';

describe('loadPropertyStaffs', () => {
  it('should return an action', () => {
    expect(fromPropertyStaff.loadPropertyStaffs().type).toBe('[PropertyStaff] Load PropertyStaffs');
  });
});
