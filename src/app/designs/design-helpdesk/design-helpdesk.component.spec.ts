import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignHelpdeskComponent } from './design-helpdesk.component';

describe('DesignHelpdeskComponent', () => {
  let component: DesignHelpdeskComponent;
  let fixture: ComponentFixture<DesignHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
