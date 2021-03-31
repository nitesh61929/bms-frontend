import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignReportGatepassComponent } from './design-report-gatepass.component';

describe('DesignReportGatepassComponent', () => {
  let component: DesignReportGatepassComponent;
  let fixture: ComponentFixture<DesignReportGatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignReportGatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignReportGatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
