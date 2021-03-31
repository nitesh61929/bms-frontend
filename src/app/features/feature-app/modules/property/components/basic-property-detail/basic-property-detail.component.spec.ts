import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPropertyDetailComponent } from './basic-property-detail.component';

describe('BasicPropertyDetailComponent', () => {
  let component: BasicPropertyDetailComponent;
  let fixture: ComponentFixture<BasicPropertyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPropertyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
