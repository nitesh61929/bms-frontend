import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginWithPasswordComponent } from "./login-with-password.component";

describe("LoginWithPasswordComponent", () => {
  let component: LoginWithPasswordComponent;
  let fixture: ComponentFixture<LoginWithPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWithPasswordComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
