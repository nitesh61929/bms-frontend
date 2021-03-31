import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepassReportComponent } from './gatepass-report.component';

describe('GatepassReportComponent', () => {
  let component: GatepassReportComponent;
  let fixture: ComponentFixture<GatepassReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatepassReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatepassReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
