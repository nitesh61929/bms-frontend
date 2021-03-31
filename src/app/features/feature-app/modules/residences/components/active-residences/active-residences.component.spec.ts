import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActiveResidencesComponent } from "./active-residences.component";

describe("ActiveResidencesComponent", () => {
  let component: ActiveResidencesComponent;
  let fixture: ComponentFixture<ActiveResidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveResidencesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
