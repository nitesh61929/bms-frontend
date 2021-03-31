import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersContainerComponent } from './admin-users-container.component';

describe('AdminUsersContainerComponent', () => {
  let component: AdminUsersContainerComponent;
  let fixture: ComponentFixture<AdminUsersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
