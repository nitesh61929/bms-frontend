import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicAlertReportContainerComponent } from './panic-alert-report-container.component';

describe('PanicAlertReportContainerComponent', () => {
  let component: PanicAlertReportContainerComponent;
  let fixture: ComponentFixture<PanicAlertReportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanicAlertReportContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicAlertReportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
