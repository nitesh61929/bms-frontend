import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodConfigComponent } from './payment-method-config.component';

describe('PaymentMethodConfigComponent', () => {
  let component: PaymentMethodConfigComponent;
  let fixture: ComponentFixture<PaymentMethodConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
