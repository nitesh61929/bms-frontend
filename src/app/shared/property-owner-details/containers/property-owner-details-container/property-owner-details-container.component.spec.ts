import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyOwnerDetailsContainerComponent } from './property-owner-details-container.component';

describe('PropertyOwnerDetailsContainerComponent', () => {
  let component: PropertyOwnerDetailsContainerComponent;
  let fixture: ComponentFixture<PropertyOwnerDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyOwnerDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyOwnerDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
