import { adminAccountsReducer, initialAdminAccountsState } from "./admin-accounts.reducer";

describe("Admin Account Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = adminAccountsReducer(initialAdminAccountsState, action);

      expect(result).toBe(initialAdminAccountsState);
    });
  });
});
