import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceChargeComponent } from './maintenance-charge.component';

describe('MaintenanceChargeComponent', () => {
  let component: MaintenanceChargeComponent;
  let fixture: ComponentFixture<MaintenanceChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
