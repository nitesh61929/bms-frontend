import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInvoiceSettingContainerComponent } from './property-invoice-setting-container.component';

describe('PropertyInvoiceSettingContainerComponent', () => {
  let component: PropertyInvoiceSettingContainerComponent;
  let fixture: ComponentFixture<PropertyInvoiceSettingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInvoiceSettingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInvoiceSettingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
