import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WizardSectionComponent } from "./wizard-section.component";

describe("WizardSectionComponent", () => {
  let component: WizardSectionComponent;
  let fixture: ComponentFixture<WizardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
