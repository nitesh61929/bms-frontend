import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitListContainerComponent } from './unit-list-container.component';

describe('UnitListContainerComponent', () => {
  let component: UnitListContainerComponent;
  let fixture: ComponentFixture<UnitListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
