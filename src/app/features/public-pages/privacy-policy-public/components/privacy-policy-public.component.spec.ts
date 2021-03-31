import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyPublicComponent } from './privacy-policy-public.component';

describe('PrivacyPolicyPublicComponent', () => {
  let component: PrivacyPolicyPublicComponent;
  let fixture: ComponentFixture<PrivacyPolicyPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
