import { committeeMemberReducer, initialCommitteeMemberState } from "./committee-member.reducer";

describe("CommitteeMember Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = committeeMemberReducer(initialCommitteeMemberState, action);

      expect(result).toBe(initialCommitteeMemberState);
    });
  });
});
