import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AdminAccountsContainerComponent } from "./admin-accounts-container.component";

describe("AdminAccountsContainerComponent", () => {
  let component: AdminAccountsContainerComponent;
  let fixture: ComponentFixture<AdminAccountsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAccountsContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
