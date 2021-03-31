import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskCategoryContainerComponent } from './helpdesk-category-container.component';

describe('HelpdeskCategoryContainerComponent', () => {
  let component: HelpdeskCategoryContainerComponent;
  let fixture: ComponentFixture<HelpdeskCategoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskCategoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskCategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
