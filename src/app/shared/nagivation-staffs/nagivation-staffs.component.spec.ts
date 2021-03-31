import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagivationStaffsComponent } from './nagivation-staffs.component';

describe('NagivationStaffsComponent', () => {
  let component: NagivationStaffsComponent;
  let fixture: ComponentFixture<NagivationStaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagivationStaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagivationStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
