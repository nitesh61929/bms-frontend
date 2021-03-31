import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGreetComponent } from './sign-up-greet.component';

describe('SignUpGreetComponent', () => {
  let component: SignUpGreetComponent;
  let fixture: ComponentFixture<SignUpGreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpGreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
