import { OverlayModule } from "@angular/cdk/overlay";
import { TestBed } from "@angular/core/testing";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarService } from "./snack-bar.service";

describe("SnackBarService", () => {
  let service: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [MatSnackBar],
    });
    service = TestBed.inject(SnackBarService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
