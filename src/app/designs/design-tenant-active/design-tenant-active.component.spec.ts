import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignTenantActiveComponent } from "./design-tenant-active.component";

describe("DesignTenantActiveComponent", () => {
  let component: DesignTenantActiveComponent;
  let fixture: ComponentFixture<DesignTenantActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignTenantActiveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTenantActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
