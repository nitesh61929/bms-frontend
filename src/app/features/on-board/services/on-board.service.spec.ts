import { TestBed } from "@angular/core/testing";

import { OnBoardService } from "./on-board.service";

describe("OnBoardService", () => {
  let service: OnBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnBoardService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
