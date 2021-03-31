import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyContainerComponent } from './add-property-container.component';

describe('AddPropertyContainerComponent', () => {
  let component: AddPropertyContainerComponent;
  let fixture: ComponentFixture<AddPropertyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropertyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
