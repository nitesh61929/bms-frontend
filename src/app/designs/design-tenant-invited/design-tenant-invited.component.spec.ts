import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignTenantInvitedComponent } from "./design-tenant-invited.component";

describe("DesignTenantInvitedComponent", () => {
  let component: DesignTenantInvitedComponent;
  let fixture: ComponentFixture<DesignTenantInvitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignTenantInvitedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTenantInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
