import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GreetContainerComponent } from "./greet-container.component";

describe("GreetContainerComponent", () => {
  let component: GreetContainerComponent;
  let fixture: ComponentFixture<GreetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GreetContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
