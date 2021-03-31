import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import {
  IUnit,
  IUnitContractDate,
  IUnitDetail,
  IUnitDocument,
  IUnitMaintenanceConfig,
  IUnitRentConfig,
} from "@shared/interfaces/unit";
import * as UnitActions from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-unit-detail-container",
  templateUrl: "./unit-detail-container.component.html",
})
export class UnitDetailContainerComponent extends BaseComponent implements OnInit {
  @Output() updateUnitMaintenanceChargeSuccess: EventEmitter<null> = new EventEmitter<null>();
  @Output() unitRentConfigUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Input() activePropertyId: string;
  @Input() unit: IUnit;
  unitDetail$: Observable<IUnit>;
  unitDetail: IUnit;
  unitDetailPayload: IUnitDetail;
  unitDocumentPayload: IUnitDocument;
  unitMaintenanceConfigPayload: IUnitMaintenanceConfig;
  unitRentConfigPayload: IUnitRentConfig;
  unitContractPayload: IUnitContractDate;
  destroyed$ = new Subject<any>();

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.listenObservables();
    this.fetchUnitDetail();
  }

  fetchUnitDetail() {
    this.store.dispatch(UnitActions.getUnitDetail({ id: this.unit.id }));
  }

  listenObservables() {
    this.unitDetail$ = this.store.select((store) => store.sharedModule.unit.unitDetail);
    this.unitDetail$.subscribe((d) => {
      this.unitDetail = d;
    });
  }

  onUnitRentConfigUpdated() {
    this.unitRentConfigUpdated.emit();
  }
}
