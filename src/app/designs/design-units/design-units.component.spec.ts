import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignUnitsComponent } from "./design-units.component";

describe("DesignUnitsComponent", () => {
  let component: DesignUnitsComponent;
  let fixture: ComponentFixture<DesignUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignUnitsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
