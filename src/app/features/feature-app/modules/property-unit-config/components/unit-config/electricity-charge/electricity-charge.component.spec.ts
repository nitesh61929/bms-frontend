import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityChargeComponent } from './electricity-charge.component';

describe('ElectricityChargeComponent', () => {
  let component: ElectricityChargeComponent;
  let fixture: ComponentFixture<ElectricityChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
