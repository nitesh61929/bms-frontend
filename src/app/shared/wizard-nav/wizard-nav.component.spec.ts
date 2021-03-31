import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WizardNavComponent } from "./wizard-nav.component";

describe("WizardNavComponent", () => {
  let component: WizardNavComponent;
  let fixture: ComponentFixture<WizardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardNavComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
