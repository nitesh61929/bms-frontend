import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignInvoicesComponent } from './design-invoices.component';

describe('DesignInvoicesComponent', () => {
  let component: DesignInvoicesComponent;
  let fixture: ComponentFixture<DesignInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
