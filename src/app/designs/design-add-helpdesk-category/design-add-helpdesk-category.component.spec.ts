import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAddHelpdeskCategoryComponent } from './design-add-helpdesk-category.component';

describe('DesignAddHelpdeskCategoryComponent', () => {
  let component: DesignAddHelpdeskCategoryComponent;
  let fixture: ComponentFixture<DesignAddHelpdeskCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignAddHelpdeskCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAddHelpdeskCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
