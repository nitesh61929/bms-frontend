import { TestBed } from "@angular/core/testing";
import { PermissionService } from "./permissions.service";

describe("WorkFlowEventsService", () => {
  let service: PermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
