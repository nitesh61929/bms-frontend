import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SignUpContainerComponent } from "./sign-up-container.component";

describe("SignUpContainerComponent", () => {
  let component: SignUpContainerComponent;
  let fixture: ComponentFixture<SignUpContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
