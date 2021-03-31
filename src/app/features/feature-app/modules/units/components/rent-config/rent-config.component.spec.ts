import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentConfigComponent } from './rent-config.component';

describe('RentConfigComponent', () => {
  let component: RentConfigComponent;
  let fixture: ComponentFixture<RentConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
