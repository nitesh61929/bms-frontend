import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConfigContainerComponent } from './unit-config-container.component';

describe('UnitConfigContainerComponent', () => {
  let component: UnitConfigContainerComponent;
  let fixture: ComponentFixture<UnitConfigContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitConfigContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConfigContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
