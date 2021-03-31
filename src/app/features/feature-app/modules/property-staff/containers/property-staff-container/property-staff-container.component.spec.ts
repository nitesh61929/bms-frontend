import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStaffContainerComponent } from './property-staff-container.component';

describe('PropertyStaffContainerComponent', () => {
  let component: PropertyStaffContainerComponent;
  let fixture: ComponentFixture<PropertyStaffContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyStaffContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStaffContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
