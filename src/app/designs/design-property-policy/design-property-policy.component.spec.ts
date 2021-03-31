import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPropertyPolicyComponent } from './design-property-policy.component';

describe('DesignPropertyPolicyComponent', () => {
  let component: DesignPropertyPolicyComponent;
  let fixture: ComponentFixture<DesignPropertyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPropertyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPropertyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
