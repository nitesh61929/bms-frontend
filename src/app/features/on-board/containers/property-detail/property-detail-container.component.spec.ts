import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyDetailContainerComponent } from "./property-detail-container.component";

describe("PropertyDetailContainerComponent", () => {
  let component: PropertyDetailContainerComponent;
  let fixture: ComponentFixture<PropertyDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyDetailContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
