import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OwnerTypeComponent } from "./owner-type.component";

describe("OwnerTypeComponent", () => {
  let component: OwnerTypeComponent;
  let fixture: ComponentFixture<OwnerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
