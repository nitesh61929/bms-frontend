import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailFormContainerComponent } from './property-detail-form-container.component';

describe('PropertyDetailFormContainerComponent', () => {
  let component: PropertyDetailFormContainerComponent;
  let fixture: ComponentFixture<PropertyDetailFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDetailFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
