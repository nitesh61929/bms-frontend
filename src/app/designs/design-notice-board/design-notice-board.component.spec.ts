import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignNoticeBoardComponent } from './design-notice-board.component';

describe('DesignNoticeBoardComponent', () => {
  let component: DesignNoticeBoardComponent;
  let fixture: ComponentFixture<DesignNoticeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignNoticeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignNoticeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
