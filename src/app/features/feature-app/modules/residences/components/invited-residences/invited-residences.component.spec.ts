import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { InvitedResidencesComponent } from "./invited-residences.component";

describe("InvitedResidencesComponent", () => {
  let component: InvitedResidencesComponent;
  let fixture: ComponentFixture<InvitedResidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvitedResidencesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
