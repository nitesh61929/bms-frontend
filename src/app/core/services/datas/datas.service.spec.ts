import { TestBed } from "@angular/core/testing";

import { DatasService } from "./datas.service";

describe("DatasService", () => {
  let service: DatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
