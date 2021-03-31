import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignReportPanicAlertComponent } from './design-report-panic-alert.component';

describe('DesignReportPanicAlertComponent', () => {
  let component: DesignReportPanicAlertComponent;
  let fixture: ComponentFixture<DesignReportPanicAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignReportPanicAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignReportPanicAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
