import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignOwnerComponent } from "./design-owner.component";

describe("DesignOwnerComponent", () => {
  let component: DesignOwnerComponent;
  let fixture: ComponentFixture<DesignOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignOwnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
