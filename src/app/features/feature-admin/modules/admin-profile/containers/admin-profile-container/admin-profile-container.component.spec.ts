import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileContainerComponent } from './admin-profile-container.component';

describe('AdminProfileContainerComponent', () => {
  let component: AdminProfileContainerComponent;
  let fixture: ComponentFixture<AdminProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
