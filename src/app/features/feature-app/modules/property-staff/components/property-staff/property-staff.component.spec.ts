import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStaffComponent } from './property-staff.component';

describe('PropertyStaffComponent', () => {
  let component: PropertyStaffComponent;
  let fixture: ComponentFixture<PropertyStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
