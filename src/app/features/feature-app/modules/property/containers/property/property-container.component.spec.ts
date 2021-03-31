import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContainerComponent } from './property-container.component';

describe('PropertyContainerComponent', () => {
  let component: PropertyContainerComponent;
  let fixture: ComponentFixture<PropertyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
