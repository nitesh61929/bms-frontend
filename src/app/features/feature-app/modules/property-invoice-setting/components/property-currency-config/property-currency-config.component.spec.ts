import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCurrencyConfigComponent } from './property-currency-config.component';

describe('PropertyCurrencyConfigComponent', () => {
  let component: PropertyCurrencyConfigComponent;
  let fixture: ComponentFixture<PropertyCurrencyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCurrencyConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCurrencyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
