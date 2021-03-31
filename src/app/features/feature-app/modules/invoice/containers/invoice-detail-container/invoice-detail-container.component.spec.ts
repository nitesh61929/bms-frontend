import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailContainerComponent } from './invoice-detail-container.component';

describe('InvoiceDetailContainerComponent', () => {
  let component: InvoiceDetailContainerComponent;
  let fixture: ComponentFixture<InvoiceDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
