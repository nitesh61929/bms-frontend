import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyTypeComponent } from "./property-type.component";

describe("PropertyTypeComponent", () => {
  let component: PropertyTypeComponent;
  let fixture: ComponentFixture<PropertyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
