import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGreetContainerComponent } from './sign-up-greet-container.component';

describe('SignUpGreetContainerComponent', () => {
  let component: SignUpGreetContainerComponent;
  let fixture: ComponentFixture<SignUpGreetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpGreetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpGreetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
