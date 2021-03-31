import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProductSettingComponent } from './design-product-setting.component';

describe('DesignProductSettingComponent', () => {
  let component: DesignProductSettingComponent;
  let fixture: ComponentFixture<DesignProductSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignProductSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProductSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
