import { TestBed } from "@angular/core/testing";

import { PropertyOwnerInvitationService } from "./property-owner-invitation.service";

describe("PropertyOwnerInvitationService", () => {
  let service: PropertyOwnerInvitationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyOwnerInvitationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
