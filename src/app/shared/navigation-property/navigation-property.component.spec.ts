import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPropertyComponent } from './navigation-property.component';

describe('NavigationPropertyComponent', () => {
  let component: NavigationPropertyComponent;
  let fixture: ComponentFixture<NavigationPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
