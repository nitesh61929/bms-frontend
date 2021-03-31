import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDialogAdminOwnerDetailComponent } from './design-dialog-admin-owner-detail.component';

describe('DesignDialogAdminOwnerDetailComponent', () => {
  let component: DesignDialogAdminOwnerDetailComponent;
  let fixture: ComponentFixture<DesignDialogAdminOwnerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignDialogAdminOwnerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDialogAdminOwnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
