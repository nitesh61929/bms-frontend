import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { setOnBoardPropertyType } from "../../store/actions/on-board.actions";

@Component({
  selector: "app-property-type",
  templateUrl: "./property-type.component.html",
})
export class PropertyTypeComponent extends BaseComponent implements OnInit {
  @Input() pathName: string;
  @Input() propertyTypes$: Observable<any>;
  @Input() ownerDetail: any;
  selectedPropertyTypeCode: string;
  ownerId: string;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    const selectedPropertyTypeCode$ = this.store.select((store) => store.onBoard.propertyType);
    selectedPropertyTypeCode$.subscribe((propertyType) => {
      this.selectedPropertyTypeCode = propertyType;
    });
    this.ownerId = this.activatedRoute.snapshot.paramMap.get("ownerId");
  }

  onNext() {
    this.store.dispatch(setOnBoardPropertyType({ data: this.selectedPropertyTypeCode }));
    if (this.selectedPropertyTypeCode === "RESIDENTIAL") {
      this.redirectTo(`${AppRoutes.ON_BOARD_PROPERTY_DETAIL}/${this.ownerId}/residential`);
    }
    if (this.selectedPropertyTypeCode === "HOUSING") {
      this.redirectTo(`${AppRoutes.ON_BOARD_PROPERTY_DETAIL}/${this.ownerId}/housing`);
    }
  }

  onPrevious() {
    if (this.ownerDetail && this.ownerDetail.ownerType.code === "COMPANY") {
      this.redirectTo(AppRoutes.ON_BOARD_OWNER_COMPANY);
    }

    if (this.ownerDetail && this.ownerDetail.ownerType.code === "INDIVIDUAL") {
      this.redirectTo(AppRoutes.ON_BOARD_OWNER_INDIVIDUAL);
    }
  }

  onSelectPropertyType(propertyTypeCode: string) {
    this.selectedPropertyTypeCode = propertyTypeCode;
  }
}
