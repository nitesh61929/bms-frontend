import { TestBed } from "@angular/core/testing";
import { ResidencesService } from "./residence.service";

describe("ResidencesService", () => {
  let service: ResidencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidencesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
