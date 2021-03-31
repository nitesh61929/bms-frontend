import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceContainerComponent } from './invoice-container.component';

describe('InvoiceContainerComponent', () => {
  let component: InvoiceContainerComponent;
  let fixture: ComponentFixture<InvoiceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
