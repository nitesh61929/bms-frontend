import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCredentialComponent } from './update-credential.component';

describe('UpdateCredentialComponent', () => {
  let component: UpdateCredentialComponent;
  let fixture: ComponentFixture<UpdateCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
