import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyPublicContainerComponent } from './privacy-policy-public-container.component';

describe('PrivacyPolicyPublicContainerComponent', () => {
  let component: PrivacyPolicyPublicContainerComponent;
  let fixture: ComponentFixture<PrivacyPolicyPublicContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyPublicContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyPublicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
