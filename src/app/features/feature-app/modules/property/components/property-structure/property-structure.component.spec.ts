import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStructureComponent } from './property-structure.component';

describe('PropertyStructureComponent', () => {
  let component: PropertyStructureComponent;
  let fixture: ComponentFixture<PropertyStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
