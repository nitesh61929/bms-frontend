import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskCategoryComponent } from './helpdesk-category.component';

describe('HelpdeskCategoryComponent', () => {
  let component: HelpdeskCategoryComponent;
  let fixture: ComponentFixture<HelpdeskCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
