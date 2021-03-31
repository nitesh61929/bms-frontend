import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { InvitedAccountsComponent } from "./invited-accounts.component";

describe("InvitedAccountsComponent", () => {
  let component: InvitedAccountsComponent;
  let fixture: ComponentFixture<InvitedAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvitedAccountsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
