import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignProductAdminPropertyComponent } from "./design-product-admin-property.component";

describe("DesignProductAdminPropertyComponent", () => {
  let component: DesignProductAdminPropertyComponent;
  let fixture: ComponentFixture<DesignProductAdminPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignProductAdminPropertyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProductAdminPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
