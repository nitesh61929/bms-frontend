import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeDetailContainerComponent } from './notice-detail-container.component';

describe('NoticeDetailContainerComponent', () => {
  let component: NoticeDetailContainerComponent;
  let fixture: ComponentFixture<NoticeDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
