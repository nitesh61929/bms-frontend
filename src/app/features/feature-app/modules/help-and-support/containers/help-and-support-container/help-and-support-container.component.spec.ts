import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAndSupportContainerComponent } from './help-and-support-container.component';

describe('HelpAndSupportContainerComponent', () => {
  let component: HelpAndSupportContainerComponent;
  let fixture: ComponentFixture<HelpAndSupportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpAndSupportContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAndSupportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
