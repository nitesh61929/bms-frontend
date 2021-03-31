import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TermsAndConditionsPublicContainerComponent } from "./terms-and-conditions-public-container.component";

describe("TermsAndConditionsPublicContainerComponent", () => {
  let component: TermsAndConditionsPublicContainerComponent;
  let fixture: ComponentFixture<TermsAndConditionsPublicContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndConditionsPublicContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsPublicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
