import { animate, state, style, transition, trigger } from "@angular/animations";
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IPagination } from "@shared/interfaces";
import { IInvitations } from "@shared/interfaces/invitations";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IUpdateInvitationStatus } from "../../interfaces/update-invitation-status";
import { AdminAccountsService } from "../../services/admin-accounts.service";

@Component({
  selector: "app-invited-accounts",
  templateUrl: "./invited-accounts.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class InvitedAccountsComponent extends BaseComponent implements OnInit, AfterViewChecked {
  @ViewChild("matSelect") matSelect: any;
  @Input() pendingAccountInvitations$: Observable<IInvitations[]>;
  @Output() statusChange: EventEmitter<IUpdateInvitationStatus> = new EventEmitter<IUpdateInvitationStatus>();
  @Output() invitePropertyOwnerClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() resendInvitationClicked: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() pagination$: Observable<IPagination>;
  dataSource: MatTableDataSource<IInvitations>;
  columnsToDisplay = ["sn", "fullname", "phoneNumber", "email", "ownerType", "userStatus"];
  expandedElement: IInvitations | null;
  statusSelectForm: FormGroup;
  currentElement: any;
  breadcrumbsList: Array<IBreadcrumb>;
  listLength: number;
  invitationStatuses = [];
  initialStatusSelected: string = "";
  hasInviteAccountAccess = AppPermissions.INVITE_ACCOUNT;
  hasReinviteAccountAccess = AppPermissions.REINVITE_ACCOUNT;
  hasUpdateInvitationStatusAccess = AppPermissions.INVITATION_UPDATE_STATUS;
  statusFilterValue: string = "";
  searchValue: string = "";
  disableStatusChange: boolean = true;

  constructor(
    protected adminAccountsService: AdminAccountsService,
    protected permissionsService: PermissionsService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.invitationStatuses = this.adminAccountsService.statuses;

    this.breadcrumbsList = [
      {
        displayText: "Dashboard",
        routerLink: "/admin-dashboard",
      },
      {
        displayText: "Account",
        routerLink: "",
      },

      {
        displayText: "Invited",
        routerLink: "",
      },
    ];
    this.initialStatusSelected = "INVITED";
  }

  ngOnInit(): void {
    this.listenObservables();
    this.setStatusSelectFormGroup();
  }

  ngAfterViewInit() {
    this.trackPaginator();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  prepareFilterParams() {
    var params = {};
    if (this.paginator) {
      params = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: this.searchValue,
        status: this.statusFilterValue,
      };
    }
    return params;
  }

  trackPaginator() {
    if (this.paginator) {
      this.paginator.page
        .pipe(
          tap(() => {
            this.storage.set(StorageKeys.PER_PAGE, this.paginator.pageSize);
            const param = this.prepareFilterParams();
            this.paramChanged.emit(param);
          })
        )
        .subscribe();
    }
  }

  onSearch(searchValue: string) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.searchValue = searchValue;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onStatusFilter(statusFilter: MatSelectChange) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.statusFilterValue = statusFilter.value;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  sortData(sort: Sort) {
    if (this.paginator) {
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        sortBy: sort.active,
        sortByOrder: sort.direction,
      };
      this.paramChanged.emit(param);
    }
  }

  setStatusSelectFormGroup() {
    this.statusSelectForm = this.formBuilder.group({
      statusSelect: [],
    });
  }

  listenObservables() {
    this.pendingAccountInvitations$.subscribe((pendingInvitationList) => {
      this.dataSource = new MatTableDataSource(pendingInvitationList);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  allowStatusUpdate(status: string) {
    // const bool = this.permissionsService.doCheckAuthorization(this.hasUpdateInvitationStatusAccess);
    return !this.getUpdatableStatus().includes(status);
  }

  getUpdatableStatus() {
    return ["PENDING_VERIFICATION", "IN_VERIFICATION"];
  }

  onStatusChange(statusChange: MatSelectChange, index: number, invitation: IInvitations) {
    if (statusChange.value !== invitation.status) {
      const updateStatusPayload = {
        userId: invitation.userId ?? "",
        ownerId: invitation.ownerId ?? "",
        propertyId: invitation.propertyId ?? "",
        status: statusChange.value ?? "",
        modules: ["USER"],
        index,
      };
      this.statusChange.emit(updateStatusPayload);
    }

    return null;
  }

  resetInitialStatus(index?: number) {
    this.statusSelectForm.get("statusSelect").setValue(this.currentElement.status);
  }

  handleInviteOwnerModal() {
    this.invitePropertyOwnerClicked.emit();
  }

  allowResend(invitation: IInvitations) {
    return ["INVITED", "EXPIRED"].includes(invitation.status);
  }

  resendInvitation(invitationId: string) {
    this.resendInvitationClicked.emit(invitationId);
  }

  onClickTableRow(element: any) {
    this.currentElement = element;
    this.expandedElement = this.expandedElement === element ? null : element;
    if (this.expandedElement === element) {
      // expand row
      this.statusSelectForm.get("statusSelect").setValue(element.status);
      if (this.allowStatusUpdate(this.currentElement.status)) {
        this.statusSelectForm.get("statusSelect").disable();
      } else {
        this.statusSelectForm.get("statusSelect").enable();
      }
    } else {
      // collapse row
    }
  }

  changeStatusDisability(disable: boolean) {
    this.disableStatusChange = disable;
    if (this.disableStatusChange || this.allowStatusUpdate(this.currentElement.status)) {
      this.statusSelectForm.get("statusSelect").disable();
    } else {
      this.statusSelectForm.get("statusSelect").enable();
    }
  }
}
