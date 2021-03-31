import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignProductAdminOwnerComponent } from "./design-product-admin-owner.component";

describe("DesignProductAdminOwnerComponent", () => {
  let component: DesignProductAdminOwnerComponent;
  let fixture: ComponentFixture<DesignProductAdminOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignProductAdminOwnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProductAdminOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
