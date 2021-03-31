import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterChargeComponent } from './water-charge.component';

describe('WaterChargeComponent', () => {
  let component: WaterChargeComponent;
  let fixture: ComponentFixture<WaterChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
