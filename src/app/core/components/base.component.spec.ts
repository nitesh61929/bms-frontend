import { Injector } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppInjector } from "app/app-injector.service";
import { appImports, appMaterialImports } from "app/app.imports";
import { appMaterialProviders, appProviders } from "app/app.providers";
import { BaseComponent } from "./base.component";

describe("BaseComponent", () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [appImports, appMaterialImports],
      declarations: [BaseComponent],
      providers: [appProviders, appMaterialProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    AppInjector.setInjector(TestBed.inject(Injector));
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
