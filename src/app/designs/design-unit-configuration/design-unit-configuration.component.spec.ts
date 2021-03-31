import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignUnitConfigurationComponent } from './design-unit-configuration.component';

describe('DesignUnitConfigurationComponent', () => {
  let component: DesignUnitConfigurationComponent;
  let fixture: ComponentFixture<DesignUnitConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignUnitConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignUnitConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
