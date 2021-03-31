import { Injector } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppInjector } from "app/app-injector.service";
import { appImports, appMaterialImports } from "app/app.imports";
import { appMaterialProviders, appProviders } from "app/app.providers";
import { DashboardComponent } from "./dashboard.component";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [appImports, appMaterialImports],
      declarations: [DashboardComponent],
      providers: [appProviders, appMaterialProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    AppInjector.setInjector(TestBed.inject(Injector));
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
