import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyOwnerInvitationComponent } from "./property-owner-invitation.component";

describe("PropertyOwnerInvitationComponent", () => {
  let component: PropertyOwnerInvitationComponent;
  let fixture: ComponentFixture<PropertyOwnerInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyOwnerInvitationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyOwnerInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
