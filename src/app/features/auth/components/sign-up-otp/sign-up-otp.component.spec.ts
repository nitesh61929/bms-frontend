import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SignUpOtpComponent } from "./sign-up-otp.component";

describe("SignUpOtpComponent", () => {
  let component: SignUpOtpComponent;
  let fixture: ComponentFixture<SignUpOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpOtpComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
