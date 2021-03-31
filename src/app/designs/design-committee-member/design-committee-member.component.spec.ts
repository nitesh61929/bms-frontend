import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCommitteeMemberComponent } from './design-committee-member.component';

describe('DesignCommitteeMemberComponent', () => {
  let component: DesignCommitteeMemberComponent;
  let fixture: ComponentFixture<DesignCommitteeMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCommitteeMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCommitteeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
