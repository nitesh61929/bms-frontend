import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OwnerDetailContainerComponent } from "./owner-detail-container.component";

describe("OwnerDetailContainerComponent", () => {
  let component: OwnerDetailContainerComponent;
  let fixture: ComponentFixture<OwnerDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDetailContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
