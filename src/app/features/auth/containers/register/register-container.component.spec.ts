import { Injector } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppInjector } from "app/app-injector.service";
import { appImports, appMaterialImports } from "app/app.imports";
import { appMaterialProviders, appProviders } from "app/app.providers";
import { RegisterContainerComponent } from "./register-container.component";

describe("RegisterContainerComponent", () => {
  let component: RegisterContainerComponent;
  let fixture: ComponentFixture<RegisterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [appImports, appMaterialImports],
      declarations: [RegisterContainerComponent],
      providers: [appProviders, appMaterialProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    AppInjector.setInjector(TestBed.inject(Injector));
    fixture = TestBed.createComponent(RegisterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
