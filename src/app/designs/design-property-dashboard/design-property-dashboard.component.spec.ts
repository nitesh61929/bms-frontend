import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPropertyDashboardComponent } from './design-property-dashboard.component';

describe('DesignPropertyDashboardComponent', () => {
  let component: DesignPropertyDashboardComponent;
  let fixture: ComponentFixture<DesignPropertyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignPropertyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPropertyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
