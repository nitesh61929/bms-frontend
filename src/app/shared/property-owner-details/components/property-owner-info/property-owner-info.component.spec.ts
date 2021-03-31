import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyOwnerInfoComponent } from './property-owner-info.component';

describe('PropertyOwnerInfoComponent', () => {
  let component: PropertyOwnerInfoComponent;
  let fixture: ComponentFixture<PropertyOwnerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyOwnerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyOwnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
