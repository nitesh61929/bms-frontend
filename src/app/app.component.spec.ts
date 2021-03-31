import { Injector } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { AppInjector } from "./app-injector.service";
import { AppComponent } from "./app.component";
import { appImports, appMaterialImports } from "./app.imports";
import { appMaterialProviders, appProviders } from "./app.providers";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [appImports, appMaterialImports],
      declarations: [AppComponent],
      providers: [appProviders, appMaterialProviders],
    }).compileComponents();
  }));

  it("should create the app", () => {
    AppInjector.setInjector(TestBed.inject(Injector));
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
