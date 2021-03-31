import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPropertyContainerComponent } from './admin-add-property-container.component';

describe('AdminAddPropertyContainerComponent', () => {
  let component: AdminAddPropertyContainerComponent;
  let fixture: ComponentFixture<AdminAddPropertyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPropertyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPropertyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
