import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes, StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { getUserPropertyPermissions, getUserPropertyPermissionsSuccess } from "@shared/store/actions/property.actions";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-greet",
  templateUrl: "./greet.component.html",
  styleUrls: ["./greet.component.scss"],
})
export class GreetComponent extends BaseComponent implements OnInit {
  @Input() pathName: string;
  destroyed$ = new Subject<boolean>();

  constructor(private store: Store, getUserPropertyPermissionsSuccess$: Actions) {
    super();

    getUserPropertyPermissionsSuccess$
      .pipe(ofType(getUserPropertyPermissionsSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        const storagePermissions = this.storage.get(StorageKeys.USER_PERMISSIONS).concat(d.data);
        this.storage.set(StorageKeys.PERMISSIONS, storagePermissions);
        this.router.navigateByUrl(AppRoutes.DASHBOARD);
      });
  }

  ngOnInit(): void {}

  onGoToDashboard() {
    this.fetchPropertyPermissions();
    // this.storage.clearItem(StorageKeys.ON_BOARD_STATE);
  }

  private fetchPropertyPermissions() {
    const params = {
      ownerId: this.storage.get(StorageKeys.OWNER) ? this.storage.get(StorageKeys.OWNER).id : null,
      propertyId: this.storage.get(StorageKeys.ACTIVE_PROPERTY) ?? null,
    };
    this.store.dispatch(getUserPropertyPermissions({ params }));
  }
}
