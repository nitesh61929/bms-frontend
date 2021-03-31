import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ResidencesContainerComponent } from "./residences-container.component";

describe("ResidencesContainerComponent", () => {
  let component: ResidencesContainerComponent;
  let fixture: ComponentFixture<ResidencesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResidencesContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
