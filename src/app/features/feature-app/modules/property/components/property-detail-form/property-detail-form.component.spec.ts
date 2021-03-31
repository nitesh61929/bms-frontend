import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailFormComponent } from './property-detail-form.component';

describe('PropertyDetailFormComponent', () => {
  let component: PropertyDetailFormComponent;
  let fixture: ComponentFixture<PropertyDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
