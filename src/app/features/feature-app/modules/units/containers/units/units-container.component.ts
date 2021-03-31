import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";

@Component({
  selector: "app-units-container",
  templateUrl: "./units-container.component.html",
})
export class UnitsContainerComponent extends BaseComponent implements OnInit {
  activePropertyId: string;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
  }
}
