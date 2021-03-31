import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OwnerIndividualComponent } from "./owner-individual.component";

describe("OwnerIndividualComponent", () => {
  let component: OwnerIndividualComponent;
  let fixture: ComponentFixture<OwnerIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerIndividualComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
