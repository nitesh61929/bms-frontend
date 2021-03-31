import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentFormComponent } from './invoice-payment-form.component';

describe('InvoicePaymentFormComponent', () => {
  let component: InvoicePaymentFormComponent;
  let fixture: ComponentFixture<InvoicePaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePaymentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
