import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { appImports, appMaterialImports } from "app/app.imports";
import { appMaterialProviders, appProviders } from "app/app.providers";
import { RegisterComponent } from "./register.component";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [appImports, appMaterialImports],
      declarations: [RegisterComponent],
      providers: [appProviders, appMaterialProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
