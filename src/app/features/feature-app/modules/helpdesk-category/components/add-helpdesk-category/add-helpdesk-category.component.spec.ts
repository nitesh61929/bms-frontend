import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpdeskCategoryComponent } from './add-helpdesk-category.component';

describe('AddHelpdeskCategoryComponent', () => {
  let component: AddHelpdeskCategoryComponent;
  let fixture: ComponentFixture<AddHelpdeskCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHelpdeskCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHelpdeskCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
