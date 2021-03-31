import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { FileService } from "@core/services/file/file.service";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { INotices } from "@shared/interfaces/notices";
import { Observable } from "rxjs";

@Component({
  selector: "app-add-notice",
  templateUrl: "./add-notice.component.html",
})
export class AddNoticeComponent extends BaseComponent implements OnInit {
  @Output() addNoticeClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateNoticeClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() dialogCloseClicked: EventEmitter<any> = new EventEmitter<any>();
  addNoticeForm: FormGroup;
  error$: Observable<Error>;
  propertyId: string;
  isUpdate: boolean;
  imageUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fileService: FileService, private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.isUpdate = false;
    this.setPropertyId();
    this.setAddNoticeForm();
    if (this.data?.notice) {
      this.buildNoticeForm();
    }
    this.error$ = this.store.select((store) => store.sharedModule.notices.error);
    this.error$.subscribe((err) => {
      if (err && this.addNoticeForm) {
        this.errorMessageService.handleServerSideError(this.addNoticeForm, err);
      }
    });
  }

  buildNoticeForm() {
    this.isUpdate = true;
    this.imageUrl = this.data?.notice?.image ? this.data?.notice?.image?.mediumImageUrl : "";
    this.addNoticeForm.patchValue(this.data.notice);

    this.addNoticeForm.get("file").setValue(this.data?.notice?.file);
  }

  private setAddNoticeForm() {
    this.addNoticeForm = this.formBuilder.group({
      id: "",
      title: ["", [Validators.required, Validators.maxLength(250)]],
      description: ["", [Validators.required, Validators.maxLength(1000)]],
      propertyId: [this.propertyId, [Validators.required]],
      published: [false, [Validators.required]],
      file: ["", [CustomValidators.requiredFileType(["png", "jpg", "jpeg"]), CustomValidators.requiredFileSize(5120)]],
    });
  }

  setPropertyId() {
    this.propertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
  }

  onAddOrUpdateNoticeClick() {
    if (this.addNoticeForm.valid) {
      if (this.addNoticeForm.value.file === "") {
        this.addNoticeForm.get("file").setValue(null);
      }
      this.proceedAddOrUpdateNotice(this.addNoticeForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  proceedAddOrUpdateNotice(noticeFormValue: INotices) {
    noticeFormValue.id ? this.updateNoticeClicked.emit(noticeFormValue) : this.addNoticeClicked.emit(noticeFormValue);
  }

  closeDialog(): void {
    this.dialogCloseClicked.emit();
  }
}
