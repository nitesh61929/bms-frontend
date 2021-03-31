import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { InvitedResidencesContainerComponent } from "./invited-residences-container.component";

describe("InvitedResidencesContainerComponent", () => {
  let component: InvitedResidencesContainerComponent;
  let fixture: ComponentFixture<InvitedResidencesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvitedResidencesContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedResidencesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
