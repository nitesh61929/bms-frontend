import { Injector } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppInjector } from "app/app-injector.service";
import { appImports, appMaterialImports } from "app/app.imports";
import { appMaterialProviders, appProviders } from "app/app.providers";
import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [appImports, appMaterialImports],
      declarations: [LoginComponent],
      providers: [appProviders, appMaterialProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    AppInjector.setInjector(TestBed.inject(Injector));
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
