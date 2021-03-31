import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsContainerComponent } from './units-container.component';

describe('UnitsContainerComponent', () => {
  let component: UnitsContainerComponent;
  let fixture: ComponentFixture<UnitsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
