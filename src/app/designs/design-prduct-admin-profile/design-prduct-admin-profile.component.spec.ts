import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPrductAdminProfileComponent } from './design-prduct-admin-profile.component';

describe('DesignPrductAdminProfileComponent', () => {
  let component: DesignPrductAdminProfileComponent;
  let fixture: ComponentFixture<DesignPrductAdminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPrductAdminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPrductAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
