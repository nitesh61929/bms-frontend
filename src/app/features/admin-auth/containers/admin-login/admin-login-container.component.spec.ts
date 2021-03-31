import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminLoginContainerComponent } from "./admin-login-container.component";

describe("AdminLoginContainerComponent", () => {
  let component: AdminLoginContainerComponent;
  let fixture: ComponentFixture<AdminLoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
