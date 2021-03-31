import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppRoutes, StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { getOwnerDetail, onBoardOwner, onBoardOwnerUpdate } from "../../store/actions/on-board.actions";
import { BaseComponent } from "./../../../../core/components/base.component";

@Component({
  selector: "app-owner-detail-container",
  templateUrl: "./owner-detail-container.component.html",
})
export class OwnerDetailContainerComponent extends BaseComponent implements OnInit {
  ownerType: string;
  pathName: string;
  ownerDetail: any;
  error$: Observable<Error>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {
    super();
    this.router.events.subscribe(() => {
      this.pathName = location.pathname;
    });
  }

  ngOnInit(): void {
    this.ownerType = this.activatedRoute.snapshot.paramMap.get("ownerType");
    this.listenObservables();
    if (this.storage.get(StorageKeys.OWNER)) {
      const ownerId = this.storage.get(StorageKeys.OWNER).id;
      this.store.dispatch(getOwnerDetail({ id: ownerId }));
    }
    this.error$ = this.store.select((store) => store.onBoard.error);
  }

  listenObservables() {
    this.store
      .select((store) => store.onBoard.ownerDetail)
      .subscribe((ownerDetail) => {
        if (ownerDetail) {
          this.ownerDetail = ownerDetail;
        }
      });
  }

  onPreviousClick() {
    this.redirectTo(AppRoutes.ON_BOARD_OWNER_TYPE);
  }

  onNextClick(ownerDetailPayload: any) {
    if (ownerDetailPayload.ownerId) {
      this.store.dispatch(onBoardOwnerUpdate({ payload: ownerDetailPayload }));
    } else {
      this.store.dispatch(onBoardOwner({ payload: ownerDetailPayload }));
    }
  }
}
