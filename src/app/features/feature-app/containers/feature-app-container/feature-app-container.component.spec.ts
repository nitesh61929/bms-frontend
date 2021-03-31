import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAppContainerComponent } from './feature-app-container.component';

describe('FeatureAppContainerComponent', () => {
  let component: FeatureAppContainerComponent;
  let fixture: ComponentFixture<FeatureAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAppContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
