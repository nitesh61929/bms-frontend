import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDetailContainerComponent } from './unit-detail-container.component';

describe('UnitDetailContainerComponent', () => {
  let component: UnitDetailContainerComponent;
  let fixture: ComponentFixture<UnitDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
