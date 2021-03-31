import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignHelpdeskCategoryComponent } from './design-helpdesk-category.component';

describe('DesignHelpdeskCategoryComponent', () => {
  let component: DesignHelpdeskCategoryComponent;
  let fixture: ComponentFixture<DesignHelpdeskCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignHelpdeskCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignHelpdeskCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
