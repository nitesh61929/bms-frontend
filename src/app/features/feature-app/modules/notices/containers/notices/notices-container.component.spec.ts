import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesContainerComponent } from './notices-container.component';

describe('NoticesContainerComponent', () => {
  let component: NoticesContainerComponent;
  let fixture: ComponentFixture<NoticesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
