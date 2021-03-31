import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes, StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IOwnershipType } from "../../interfaces/ownership-type";
import { getOwnerDetail } from "./../../store/actions/on-board.actions";

@Component({
  selector: "app-owner-type",
  templateUrl: "./owner-type.component.html",
})
export class OwnerTypeComponent extends BaseComponent implements OnInit {
  @Input() pathName: string;
  @Input() ownershipTypes$: Observable<IOwnershipType[]>;
  selectedOwnerTypeCode: string;
  ownerDetail: any;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.listenObservables();

    if (this.storage.get(StorageKeys.OWNER)) {
      const ownerId = this.storage.get(StorageKeys.OWNER).id;
      this.store.dispatch(getOwnerDetail({ id: ownerId }));
    } else {
      this.selectedOwnerTypeCode = "COMPANY";
    }
  }

  listenObservables() {
    this.store
      .select((store) => store.onBoard.ownerDetail)
      .subscribe((ownerDetail) => {
        if (ownerDetail) {
          this.ownerDetail = ownerDetail;
          this.selectedOwnerTypeCode = ownerDetail.ownerType.code.toUpperCase();
        }
      });
  }

  onNext() {
    if (this.selectedOwnerTypeCode === "COMPANY") {
      this.redirectTo(AppRoutes.ON_BOARD_OWNER_COMPANY);
    }

    if (this.selectedOwnerTypeCode === "INDIVIDUAL") {
      this.redirectTo(AppRoutes.ON_BOARD_OWNER_INDIVIDUAL);
    }
  }

  onSelectOwnerType(ownerTypeCode: string) {
    this.selectedOwnerTypeCode = ownerTypeCode;
  }
}
