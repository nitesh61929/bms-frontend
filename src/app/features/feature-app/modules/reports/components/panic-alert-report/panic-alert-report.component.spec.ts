import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicAlertReportComponent } from './panic-alert-report.component';

describe('PanicAlertReportComponent', () => {
  let component: PanicAlertReportComponent;
  let fixture: ComponentFixture<PanicAlertReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanicAlertReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicAlertReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
