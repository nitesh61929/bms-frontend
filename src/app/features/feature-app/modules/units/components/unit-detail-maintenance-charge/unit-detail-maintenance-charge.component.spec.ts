import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDetailMaintenanceChargeComponent } from './unit-detail-maintenance-charge.component';

describe('UnitDetailMaintenanceChargeComponent', () => {
  let component: UnitDetailMaintenanceChargeComponent;
  let fixture: ComponentFixture<UnitDetailMaintenanceChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitDetailMaintenanceChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitDetailMaintenanceChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
