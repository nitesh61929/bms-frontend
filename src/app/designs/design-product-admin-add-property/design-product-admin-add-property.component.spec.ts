import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignProductAdminAddPropertyComponent } from "./design-product-admin-add-property.component";

describe("DesignProductAdminAddPropertyComponent", () => {
  let component: DesignProductAdminAddPropertyComponent;
  let fixture: ComponentFixture<DesignProductAdminAddPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignProductAdminAddPropertyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProductAdminAddPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
