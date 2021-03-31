import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskContainerComponent } from './helpdesk-container.component';

describe('HelpdeskContainerComponent', () => {
  let component: HelpdeskContainerComponent;
  let fixture: ComponentFixture<HelpdeskContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
