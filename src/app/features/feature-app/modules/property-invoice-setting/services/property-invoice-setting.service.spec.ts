import { TestBed } from '@angular/core/testing';

import { PropertyInvoiceSettingService } from './property-invoice-setting.service';

describe('PropertyInvoiceSettingService', () => {
  let service: PropertyInvoiceSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyInvoiceSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
