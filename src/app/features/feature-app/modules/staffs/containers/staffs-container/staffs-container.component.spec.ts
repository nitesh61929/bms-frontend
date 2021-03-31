import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsContainerComponent } from './staffs-container.component';

describe('StaffsContainerComponent', () => {
  let component: StaffsContainerComponent;
  let fixture: ComponentFixture<StaffsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
