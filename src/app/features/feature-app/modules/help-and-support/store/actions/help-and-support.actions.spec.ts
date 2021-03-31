import * as fromHelpAndSupport from './help-and-support.actions';

describe('loadHelpAndSupports', () => {
  it('should return an action', () => {
    expect(fromHelpAndSupport.loadHelpAndSupports().type).toBe('[HelpAndSupport] Load HelpAndSupports');
  });
});
