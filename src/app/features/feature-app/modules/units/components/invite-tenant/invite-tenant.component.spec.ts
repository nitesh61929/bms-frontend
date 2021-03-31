import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTenantComponent } from './invite-tenant.component';

describe('InviteTenantComponent', () => {
  let component: InviteTenantComponent;
  let fixture: ComponentFixture<InviteTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
