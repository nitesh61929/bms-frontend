import { helpAndSupportReducer, initialState } from "./help-and-support.reducer";

describe("HelpAndSupport Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = helpAndSupportReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
