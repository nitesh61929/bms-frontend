import { adminUsersReducer, initialAdminUsersState } from "./admin-users.reducer";

describe("AdminUsers Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = adminUsersReducer(initialAdminUsersState, action);

      expect(result).toBe(initialAdminUsersState);
    });
  });
});
