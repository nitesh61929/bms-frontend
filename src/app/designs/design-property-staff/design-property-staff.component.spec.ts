import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPropertyStaffComponent } from './design-property-staff.component';

describe('DesignPropertyStaffComponent', () => {
  let component: DesignPropertyStaffComponent;
  let fixture: ComponentFixture<DesignPropertyStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPropertyStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPropertyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
