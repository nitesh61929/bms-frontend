import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignInvoiceSettingComponent } from './design-invoice-setting.component';

describe('DesignInvoiceSettingComponent', () => {
  let component: DesignInvoiceSettingComponent;
  let fixture: ComponentFixture<DesignInvoiceSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignInvoiceSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignInvoiceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
