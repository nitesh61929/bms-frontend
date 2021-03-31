import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IPropertyUser } from "@shared/interfaces";
import { Observable, Subject } from "rxjs";
import { map, startWith, takeUntil } from "rxjs/operators";
import { ICommitteeMember } from "../../interfaces/committee-member";
import * as committeeMemberActions from "../../store/committee-member.actions";
import {
  assignCommitteeMemberToProperty,
  loadAllPropertyUsers,
  loadPropertyCommitteeMembers,
  removeCommitteeMemberFromProperty,
  updateCommitteeMemberDesignation,
} from "../../store/committee-member.actions";

@Component({
  selector: "app-committee-member",
  styleUrls: ["./committee-member.component.scss"],
  templateUrl: "./committee-member.component.html",
})
export class CommitteeMemberComponent extends BaseComponent implements OnInit {
  @ViewChild("assignCommitteeMemberNgForm") assignCommitteeMemberNgForm: NgForm;
  @ViewChild("userNameInput") userNameInput: ElementRef;
  propertyCommitteeMembers$: Observable<ICommitteeMember[]>;
  propertyCommitteeMembers: Array<ICommitteeMember>;
  pagination$: Observable<IPagination>;
  propertyCommitteeMembersDataSource = new MatTableDataSource<ICommitteeMember>();
  listLength: number;
  assignCommitteeMemberForm: FormGroup;
  destroyed$ = new Subject<boolean>();
  error$: Observable<Error>;

  @ViewChild("userInput") userInput: ElementRef;
  propertyUsers$: Observable<IPropertyUser[]>;
  propertyUsers: IPropertyUser[];
  filteredPropertyUsers: Observable<IPropertyUser[]>;
  isEditing: boolean[];
  editableDesignationValue: string;
  submitted: boolean = false;

  displayedColumns: string[] = ["sn", "fullname", "mobile_number", "designation", "actions"];
  hasCommitteeMemberAddAccess = AppPermissions.COMMITTEE_ADD;
  hasCommitteeMemberUpdateDesignationAccess = AppPermissions.COMMITTEE_UPDATE_DESIGNATION;
  hasCommitteeMemberRemoveAccess = AppPermissions.COMMITTEE_REMOVE;
  params: any = {};

  currentUserId: any;

  constructor(
    private store: Store<any>,
    public assignCommitteeMemberToPropertySuccess$: Actions,
    public removeCommitteeMemberFromPropertySuccess$: Actions,
    public updateCommitteeMemberDesignationSuccess$: Actions,
    public loadPropertyCommitteeMembersSuccess$: Actions
  ) {
    super();
    assignCommitteeMemberToPropertySuccess$
      .pipe(ofType(committeeMemberActions.assignCommitteeMemberToPropertySuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.submitted = false;
        this.fetchPropertyCommitteeMembers();
        this.assignCommitteeMemberNgForm.resetForm("");
      });

    removeCommitteeMemberFromPropertySuccess$
      .pipe(ofType(committeeMemberActions.removeCommitteeMemberFromPropertySuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.submitted = false;
        this.fetchPropertyCommitteeMembers();
        this.assignCommitteeMemberNgForm.resetForm("");
      });

    updateCommitteeMemberDesignationSuccess$
      .pipe(ofType(committeeMemberActions.updateCommitteeMemberDesignationSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.submitted = false;
        this.fetchPropertyCommitteeMembers();
        this.assignCommitteeMemberNgForm.resetForm("");
      });

    loadPropertyCommitteeMembersSuccess$
      .pipe(ofType(committeeMemberActions.loadPropertyCommitteeMembersSuccess), takeUntil(this.destroyed$))
      .subscribe(({ data }) => {
        this.propertyUsers$.subscribe((users) => {
          this.propertyUsers = users.filter((user) => !data.find(({ userId }) => user.userId === userId));
          this.listenUserSearch();
        });
      });
  }

  ngOnInit(): void {
    this.currentUserId = this.storage.get(StorageKeys.USER).id;
    this.setAssignCommitteeMemberForm();
    this.listenObservables();
    this.fetchAllPropertyUsers();
    this.fetchPropertyCommitteeMembers();
  }

  fetchAllPropertyUsers() {
    this.store.dispatch(loadAllPropertyUsers({}));
  }

  private listenUserSearch() {
    this.filteredPropertyUsers = this.assignCommitteeMemberForm.get("user").valueChanges.pipe(
      startWith(""),
      map((value) => value),
      map((user) => {
        const name = user && typeof user === "object" ? user?.name : user;
        return name ? this.filterPropertyUser(name) : this.propertyUsers.slice();
      })
    );
  }

  private filterPropertyUser(value: string): IPropertyUser[] {
    return this.propertyUsers.filter((user) => {
      return user.name.toLowerCase().includes(value.toLowerCase());
    });
  }

  displayName(user: IPropertyUser): string {
    return user && user.name ? user.name : "";
  }

  listenObservables() {
    this.error$ = this.store.select((store) => store.committeeMember.error);
    this.error$.subscribe((err) => {
      if (err && this.assignCommitteeMemberForm) {
        this.errorMessageService.handleServerSideError(this.assignCommitteeMemberForm, err);
      }
    });

    this.propertyUsers$ = this.store.select((store) => store.committeeMember.propertyUsers);

    this.propertyCommitteeMembers$ = this.store.select((store: any) => store.committeeMember.propertyCommitteeMembers);
    this.propertyCommitteeMembers$.subscribe((committeeMembers) => {
      this.setIsEditingArray(committeeMembers);
      this.propertyCommitteeMembersDataSource = new MatTableDataSource(committeeMembers);
    });

    this.pagination$ = this.store.select((store: any) => store.committeeMember.pagination);
    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  setIsEditingArray(committeeMembers: ICommitteeMember[]) {
    this.isEditing = new Array(committeeMembers.length);
    this.isEditing.fill(false);
  }

  setAssignCommitteeMemberForm() {
    this.assignCommitteeMemberForm = this.formBuilder.group({
      user: ["", [Validators.required]],
      name: ["", [Validators.required]],
      userId: ["", [Validators.required]],
      mobileNumber: ["", [Validators.required]],
      designation: ["", [Validators.required]],
    });
  }

  fetchPropertyCommitteeMembers() {
    this.store.dispatch(loadPropertyCommitteeMembers({ params: this.params }));
  }

  onUserSelected(selectedUser: MatAutocompleteSelectedEvent) {
    const user = selectedUser.option.value;
    this.assignCommitteeMemberForm.get("userId").setValue(user.userId);
  }

  setSelectedUser() {
    const user = this.assignCommitteeMemberForm.get("user").value;
    this.assignCommitteeMemberForm.get("name").setValue(user?.name);
    this.assignCommitteeMemberForm.get("mobileNumber").setValue(user?.mobileNumber);
    this.assignCommitteeMemberForm.get("userId").setValue(user?.userId);
    this.submitted = true;
  }

  assignCommitteeMember() {
    this.setSelectedUser();
    if (this.assignCommitteeMemberForm.valid) {
      this.store.dispatch(assignCommitteeMemberToProperty({ payload: this.assignCommitteeMemberForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  onRemoveCommitteeMember(committeeMemberId: string) {
    const options = {
      message: this.getTranslatedString("confirm_committee_member_remove"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(removeCommitteeMemberFromProperty({ committeeMemberId }));
      }
    });
  }

  public isEditable(i: number) {
    return this.isEditing[i];
  }

  public onEditClick(index: number, committeeMember: ICommitteeMember) {
    this.isEditing.fill(false);
    this.editableDesignationValue = committeeMember.designation;
    this.isEditing[index] = true;
  }

  onUpdate(committeeMemberId: string) {
    const params = {
      designation: this.editableDesignationValue,
    };
    this.store.dispatch(updateCommitteeMemberDesignation({ committeeMemberId, params }));
  }

  onCancelEdit() {
    this.isEditing.fill(false);
  }

  onSearch(searchValue: string) {
    this.params.searchKey = searchValue;
    this.fetchPropertyCommitteeMembers();
  }

  memberIsCurrentUser(id: any) {
    return id === this.currentUserId;
  }
}
