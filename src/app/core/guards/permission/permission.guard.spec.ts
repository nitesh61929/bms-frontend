import { TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "app/app-routing.module";
import { PermissionGuard } from "./permission.guard";

describe("PermissionGuard", () => {
  let guard: PermissionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
    });
    guard = TestBed.inject(PermissionGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
