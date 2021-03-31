import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IOwnershipType } from "./../../interfaces/ownership-type";
import { loadOwnershipType } from "./../../store/actions/on-board.actions";

@Component({
  selector: "app-owner-type-container",
  templateUrl: "./owner-type-container.component.html",
})
export class OwnerTypeContainerComponent extends BaseComponent implements OnInit {
  pathName: string;
  ownershipTypes$: Observable<IOwnershipType[]>;
  constructor(private store: Store<any>) {
    super();
    this.router.events.subscribe((val) => {
      this.pathName = location.pathname;
    });
  }

  ngOnInit(): void {
    this.ownershipTypes$ = this.store.select((store) => store.onBoard.ownershipTypes);
    this.store.dispatch(loadOwnershipType(null));
  }
}
