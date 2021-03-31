import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminAuthComponent } from "./admin-auth.component";

describe("AdminAuthComponent", () => {
  let component: AdminAuthComponent;
  let fixture: ComponentFixture<AdminAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAuthComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
