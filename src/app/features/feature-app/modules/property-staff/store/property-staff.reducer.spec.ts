import { initialPropertyStaffState, propertyStaffReducer } from "./property-staff.reducer";

describe("PropertyStaff Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = propertyStaffReducer(initialPropertyStaffState, action);

      expect(result).toBe(initialPropertyStaffState);
    });
  });
});
