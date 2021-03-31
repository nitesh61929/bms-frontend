import * as fromPropertyCommitteeMember from "./committee-member.actions";

describe("loadPropertyCommitteeMembers", () => {
  it("should return an action", () => {
    expect(fromPropertyCommitteeMember.loadPropertyCommitteeMembers().type).toBe(
      "[PropertyCommitteeMember] Load PropertyCommitteeMembers"
    );
  });
});
