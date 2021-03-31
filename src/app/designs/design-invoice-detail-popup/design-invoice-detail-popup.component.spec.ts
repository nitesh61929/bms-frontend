import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignInvoiceDetailPopupComponent } from './design-invoice-detail-popup.component';

describe('DesignInvoiceDetailPopupComponent', () => {
  let component: DesignInvoiceDetailPopupComponent;
  let fixture: ComponentFixture<DesignInvoiceDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignInvoiceDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignInvoiceDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
