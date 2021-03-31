import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceDetailComponent } from './residence-detail.component';

describe('ResidenceDetailComponent', () => {
  let component: ResidenceDetailComponent;
  let fixture: ComponentFixture<ResidenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
