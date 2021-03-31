import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OwnerTypeContainerComponent } from "./owner-type-container.component";

describe("OwnerTypeContainerComponent", () => {
  let component: OwnerTypeContainerComponent;
  let fixture: ComponentFixture<OwnerTypeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerTypeContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
