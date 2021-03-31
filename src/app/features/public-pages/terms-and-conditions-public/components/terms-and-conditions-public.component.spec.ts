import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TermsAndConditionsPublicComponent } from "./terms-and-conditions-public.component";

describe("TermsAndConditionsPublicComponent", () => {
  let component: TermsAndConditionsPublicComponent;
  let fixture: ComponentFixture<TermsAndConditionsPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndConditionsPublicComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
