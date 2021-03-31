import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActiveAccountsContainerComponent } from "./active-accounts-container.component";

describe("ActiveAccountsContainerComponent", () => {
  let component: ActiveAccountsContainerComponent;
  let fixture: ComponentFixture<ActiveAccountsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveAccountsContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAccountsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
