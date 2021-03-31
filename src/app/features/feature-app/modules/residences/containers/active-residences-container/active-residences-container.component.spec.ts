import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActiveResidencesContainerComponent } from "./active-residences-container.component";

describe("ActiveResidencesContainerComponent", () => {
  let component: ActiveResidencesContainerComponent;
  let fixture: ComponentFixture<ActiveResidencesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveResidencesContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveResidencesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
