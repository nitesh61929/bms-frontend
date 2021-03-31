import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPropertyOwnerAddPropertyComponent } from './design-property-owner-add-property.component';

describe('DesignPropertyOwnerAddPropertyComponent', () => {
  let component: DesignPropertyOwnerAddPropertyComponent;
  let fixture: ComponentFixture<DesignPropertyOwnerAddPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPropertyOwnerAddPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPropertyOwnerAddPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
