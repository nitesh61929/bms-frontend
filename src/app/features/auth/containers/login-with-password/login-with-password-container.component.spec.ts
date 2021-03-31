import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginWithPasswordContainerComponent } from "./login-with-password-container.component";

describe("LoginWithPasswordContainerComponent", () => {
  let component: LoginWithPasswordContainerComponent;
  let fixture: ComponentFixture<LoginWithPasswordContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWithPasswordContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithPasswordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
