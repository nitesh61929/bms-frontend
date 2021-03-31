import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UserPropertyDetailComponent } from "./user-property-detail.component";

describe("UserPropertyDetailComponent", () => {
  let component: UserPropertyDetailComponent;
  let fixture: ComponentFixture<UserPropertyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPropertyDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
