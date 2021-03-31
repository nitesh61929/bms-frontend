import { TestBed } from "@angular/core/testing";
import { ExceptionMessagesService } from "./exception-messages.service";

describe("ExceptionMessagesService", () => {
  let service: ExceptionMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExceptionMessagesService],
    });
    service = TestBed.inject(ExceptionMessagesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
