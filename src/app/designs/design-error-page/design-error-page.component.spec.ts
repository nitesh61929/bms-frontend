import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DesignErrorPageComponent } from "./design-error-page.component";

describe("DesignErrorPageComponent", () => {
  let component: DesignErrorPageComponent;
  let fixture: ComponentFixture<DesignErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignErrorPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
