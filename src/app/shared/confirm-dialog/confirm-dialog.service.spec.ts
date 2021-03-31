import { TestBed } from "@angular/core/testing";
import { appMaterialImports } from "app/app.imports";
import { appMaterialProviders, appProviders } from "app/app.providers";
import { ConfirmDialogService } from "./confirm-dialog.service";

describe("ConfirmDialogService", () => {
  let service: ConfirmDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [appMaterialImports],
      providers: [appProviders, appMaterialProviders],
    });
    service = TestBed.inject(ConfirmDialogService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
