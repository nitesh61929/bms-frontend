import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordContainerComponent } from './change-password-container.component';

describe('ChangePasswordContainerComponent', () => {
  let component: ChangePasswordContainerComponent;
  let fixture: ComponentFixture<ChangePasswordContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
