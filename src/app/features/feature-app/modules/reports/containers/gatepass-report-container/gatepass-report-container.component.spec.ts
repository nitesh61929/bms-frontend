import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepassReportContainerComponent } from './gatepass-report-container.component';

describe('GatepassReportContainerComponent', () => {
  let component: GatepassReportContainerComponent;
  let fixture: ComponentFixture<GatepassReportContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatepassReportContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatepassReportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
