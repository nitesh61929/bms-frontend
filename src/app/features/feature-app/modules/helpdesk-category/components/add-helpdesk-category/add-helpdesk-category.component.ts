import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { FileService } from "@core/services/file/file.service";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IHelpdeskCategory } from "../../interfaces/ticket-category";

@Component({
  selector: "app-add-helpdesk-category",
  templateUrl: "./add-helpdesk-category.component.html",
})
export class AddHelpdeskCategoryComponent extends BaseComponent implements OnInit {
  @Output() addHelpdeskCategoryClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateHelpdeskCategoryClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() dialogCloseClicked: EventEmitter<any> = new EventEmitter<any>();
  addHelpdeskCategoryForm: FormGroup;
  error$: Observable<Error>;
  isUpdate: boolean;
  imageUrl: string;
  checked: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fileService: FileService, private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.isUpdate = false;
    this.setAddHelpdeskCategoryForm();
    if (this.data?.categoryDetail) {
      this.buildHelpdeskCategoryForm();
    } else {
      this.addHelpdeskCategoryForm.get("status").setValue("ACTIVE");
      this.checked = true;
    }

    this.error$ = this.store.select((store) => store.helpdeskCategory.error);
    this.error$.subscribe((err) => {
      if (err && this.addHelpdeskCategoryForm) {
        this.errorMessageService.handleServerSideError(this.addHelpdeskCategoryForm, err);
      }
    });
  }

  buildHelpdeskCategoryForm() {
    this.isUpdate = true;
    this.checked = false;
    this.imageUrl = this.data?.categoryDetail?.image ? this.data?.categoryDetail?.image?.mediumImageUrl : "";
    this.addHelpdeskCategoryForm.patchValue(this.data.categoryDetail);

    if (this.data?.categoryDetail?.status === "ACTIVE") {
      this.checked = true;
    }

    this.addHelpdeskCategoryForm.get("image").setValue(this.data?.categoryDetail?.image);
  }

  private setAddHelpdeskCategoryForm() {
    this.addHelpdeskCategoryForm = this.formBuilder.group({
      id: "",
      title: ["", [Validators.required, Validators.maxLength(50)]],
      status: ["", [Validators.required]],
      image: ["", [CustomValidators.requiredFileType(["png", "jpg", "jpeg"]), CustomValidators.requiredFileSize(5120)]],
    });
  }

  setStatus(event: any) {
    if (event.checked) {
      this.addHelpdeskCategoryForm.get("status").setValue("ACTIVE");
      this.checked = true;
    } else {
      this.addHelpdeskCategoryForm.get("status").setValue("INACTIVE");
      this.checked = false;
    }
  }

  onAddOrUpdateHelpdeskCategory() {
    if (this.addHelpdeskCategoryForm.valid) {
      if (this.addHelpdeskCategoryForm.value.image === "") {
        this.addHelpdeskCategoryForm.get("image").setValue(null);
      }
      this.proceedAddOrUpdateHelpdeskCategory(this.addHelpdeskCategoryForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  proceedAddOrUpdateHelpdeskCategory(categoryFormValue: IHelpdeskCategory) {
    categoryFormValue.id
      ? this.updateHelpdeskCategoryClicked.emit(categoryFormValue)
      : this.addHelpdeskCategoryClicked.emit(categoryFormValue);
  }

  closeDialog(): void {
    this.dialogCloseClicked.emit();
  }
}
