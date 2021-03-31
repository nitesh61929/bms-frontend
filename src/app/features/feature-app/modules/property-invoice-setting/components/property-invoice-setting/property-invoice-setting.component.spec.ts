import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInvoiceSettingComponent } from './property-invoice-setting.component';

describe('PropertyInvoiceSettingComponent', () => {
  let component: PropertyInvoiceSettingComponent;
  let fixture: ComponentFixture<PropertyInvoiceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInvoiceSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInvoiceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
