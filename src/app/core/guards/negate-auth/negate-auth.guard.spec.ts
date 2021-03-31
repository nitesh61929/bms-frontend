import { Injector } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { AppInjector } from "app/app-injector.service";
import { appImports } from "app/app.imports";
import { appProviders } from "app/app.providers";
import { NegateAuthGuard } from "./negate-auth.guard";

describe("NegateAuthGuard", () => {
  let guard: NegateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [appImports],
      providers: [appProviders],
    });
    AppInjector.setInjector(TestBed.inject(Injector));
    guard = TestBed.inject(NegateAuthGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
