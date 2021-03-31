import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyContainerComponent } from './policy-container.component';

describe('PolicyContainerComponent', () => {
  let component: PolicyContainerComponent;
  let fixture: ComponentFixture<PolicyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
