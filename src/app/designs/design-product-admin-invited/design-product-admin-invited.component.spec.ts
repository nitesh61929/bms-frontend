import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignProductAdminInvitedComponent } from "./design-product-admin-invited.component";

describe("DesignProductAdminInvitedComponent", () => {
  let component: DesignProductAdminInvitedComponent;
  let fixture: ComponentFixture<DesignProductAdminInvitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignProductAdminInvitedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProductAdminInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
