import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { onBoardProperty } from "../../store/actions/on-board.actions";
import { BaseComponent } from "./../../../../core/components/base.component";

@Component({
  selector: "app-property-detail-container",
  templateUrl: "./property-detail-container.component.html",
})
export class PropertyDetailContainerComponent extends BaseComponent implements OnInit {
  propertyType: string;
  ownerId: string;
  pathName: string;
  error$: Observable<Error>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {
    super();
    this.router.events.subscribe((val) => {
      this.pathName = location.pathname;
    });
  }

  ngOnInit(): void {
    this.propertyType = this.activatedRoute.snapshot.paramMap.get("propertyType");
    this.ownerId = this.activatedRoute.snapshot.paramMap.get("ownerId");
    this.error$ = this.store.select((store) => store.onBoard.error);
  }

  onNextClick(propertyDetailPayload: any) {
    this.store.dispatch(onBoardProperty({ payload: propertyDetailPayload }));
  }

  onPreviousClick() {
    this.redirectTo(`${AppRoutes.ON_BOARD_PROPERTY_TYPE}/${this.ownerId}`);
  }
}
