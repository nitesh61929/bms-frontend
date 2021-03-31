import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminDashboardContainerComponent } from "./admin-dashboard-container.component";

describe("AdminDashboardContainerComponent", () => {
  let component: AdminDashboardContainerComponent;
  let fixture: ComponentFixture<AdminDashboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
