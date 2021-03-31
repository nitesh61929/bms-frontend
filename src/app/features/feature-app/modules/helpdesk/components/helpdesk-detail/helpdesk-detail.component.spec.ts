import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskDetailComponent } from './helpdesk-detail.component';

describe('HelpdeskDetailComponent', () => {
  let component: HelpdeskDetailComponent;
  let fixture: ComponentFixture<HelpdeskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
