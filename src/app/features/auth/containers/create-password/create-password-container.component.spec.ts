import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePasswordContainerComponent } from './create-password-container.component';

describe('CreatePasswordContainerComponent', () => {
  let component: CreatePasswordContainerComponent;
  let fixture: ComponentFixture<CreatePasswordContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePasswordContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePasswordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
