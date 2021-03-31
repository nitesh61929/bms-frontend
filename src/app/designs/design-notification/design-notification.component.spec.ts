import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignNotificationComponent } from './design-notification.component';

describe('DesignNotificationComponent', () => {
  let component: DesignNotificationComponent;
  let fixture: ComponentFixture<DesignNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
