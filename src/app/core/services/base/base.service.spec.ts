import { Injector } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { AppInjector } from "app/app-injector.service";
import { appImports } from "app/app.imports";
import { appProviders } from "app/app.providers";
import { BaseService } from "./base.service";

describe("BaseService", () => {
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [appImports],
      providers: [appProviders],
    });
    AppInjector.setInjector(TestBed.inject(Injector));
    service = TestBed.inject(BaseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
