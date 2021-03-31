import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskDetailContainerComponent } from './helpdesk-detail-container.component';

describe('HelpdeskDetailContainerComponent', () => {
  let component: HelpdeskDetailContainerComponent;
  let fixture: ComponentFixture<HelpdeskDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
