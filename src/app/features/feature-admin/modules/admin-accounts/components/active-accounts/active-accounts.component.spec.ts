import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActiveAccountsComponent } from "./active-accounts.component";

describe("ActiveAccountsComponent", () => {
  let component: ActiveAccountsComponent;
  let fixture: ComponentFixture<ActiveAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveAccountsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
