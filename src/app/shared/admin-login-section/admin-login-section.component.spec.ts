import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminLoginSectionComponent } from "./admin-login-section.component";

describe("AdminLoginSectionComponent", () => {
  let component: AdminLoginSectionComponent;
  let fixture: ComponentFixture<AdminLoginSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
