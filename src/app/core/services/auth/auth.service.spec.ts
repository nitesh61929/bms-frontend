import { HttpClientModule } from "@angular/common/http";
import { Injector } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppInjector } from "app/app-injector.service";
import { ConstantsService } from "../constants";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ConstantsService],
    });
    AppInjector.setInjector(TestBed.inject(Injector));
    service = TestBed.inject(AuthService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
