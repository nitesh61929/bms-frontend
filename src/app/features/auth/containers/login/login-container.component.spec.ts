import { Injector } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppInjector } from "app/app-injector.service";
import { appImports, appMaterialImports } from "app/app.imports";
import { appMaterialProviders, appProviders } from "app/app.providers";
import { LoginContainerComponent } from "./login-container.component";

describe("LoginContainerComponent", () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [appImports, appMaterialImports],
      declarations: [LoginContainerComponent],
      providers: [appProviders, appMaterialProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    AppInjector.setInjector(TestBed.inject(Injector));
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
