import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPropertyListComponent } from './owner-property-list.component';

describe('OwnerPropertyListComponent', () => {
  let component: OwnerPropertyListComponent;
  let fixture: ComponentFixture<OwnerPropertyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerPropertyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
