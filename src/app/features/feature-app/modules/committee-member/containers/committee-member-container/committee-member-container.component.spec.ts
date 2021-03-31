import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CommitteeMemberContainerComponent } from "./committee-member-container.component";

describe("CommitteeMemberContainerComponent", () => {
  let component: CommitteeMemberContainerComponent;
  let fixture: ComponentFixture<CommitteeMemberContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitteeMemberContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMemberContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
