import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OnBoardComponent } from "./on-board.component";

describe("OnBoardComponent", () => {
  let component: OnBoardComponent;
  let fixture: ComponentFixture<OnBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnBoardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
