import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConfigComponent } from './unit-config.component';

describe('UnitConfigComponent', () => {
  let component: UnitConfigComponent;
  let fixture: ComponentFixture<UnitConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
