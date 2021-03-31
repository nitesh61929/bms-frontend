import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyTypeContainerComponent } from "./property-type-container.component";

describe("PropertyTypeContainerComponent", () => {
  let component: PropertyTypeContainerComponent;
  let fixture: ComponentFixture<PropertyTypeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyTypeContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
