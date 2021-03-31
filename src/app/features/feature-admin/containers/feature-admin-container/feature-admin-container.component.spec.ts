import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAdminContainerComponent } from './feature-admin-container.component';

describe('FeatureAdminContainerComponent', () => {
  let component: FeatureAdminContainerComponent;
  let fixture: ComponentFixture<FeatureAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAdminContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
