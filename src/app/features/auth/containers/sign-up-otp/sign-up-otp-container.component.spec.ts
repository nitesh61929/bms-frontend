import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SignUpOtpContainerComponent } from "./sign-up-otp-container.component";

describe("SignUpOtpContainerComponent", () => {
  let component: SignUpOtpContainerComponent;
  let fixture: ComponentFixture<SignUpOtpContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpOtpContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpOtpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
