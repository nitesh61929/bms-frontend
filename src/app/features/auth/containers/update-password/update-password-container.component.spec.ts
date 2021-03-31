import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordContainerComponent } from './update-password-container.component';

describe('UpdatePasswordContainerComponent', () => {
  let component: UpdatePasswordContainerComponent;
  let fixture: ComponentFixture<UpdatePasswordContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
