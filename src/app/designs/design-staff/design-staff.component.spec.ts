import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignStaffComponent } from './design-staff.component';

describe('DesignStaffComponent', () => {
  let component: DesignStaffComponent;
  let fixture: ComponentFixture<DesignStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
