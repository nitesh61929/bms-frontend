import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignUsersComponent } from './design-users.component';

describe('DesignUsersComponent', () => {
  let component: DesignUsersComponent;
  let fixture: ComponentFixture<DesignUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
