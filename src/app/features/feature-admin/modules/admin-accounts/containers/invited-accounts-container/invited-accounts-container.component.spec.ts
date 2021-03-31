import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { InvitedAccountsContainerComponent } from "./invited-accounts-container.component";

describe("InvitedAccountsContainerComponent", () => {
  let component: InvitedAccountsContainerComponent;
  let fixture: ComponentFixture<InvitedAccountsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvitedAccountsContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedAccountsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
