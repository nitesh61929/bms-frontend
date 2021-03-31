import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
})
export class CommentComponent extends BaseComponent implements OnInit {
  @Output() postCommentClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() dialogCloseClicked: EventEmitter<any> = new EventEmitter<any>();
  postCommentForm: FormGroup;

  constructor(public store: Store<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }

  ngOnInit(): void {
    this.setPostCommentForm();
  }

  public setPostCommentForm() {
    this.postCommentForm = this.formBuilder.group({
      title: ["", [Validators.required]],
    });
  }

  postComment() {
    if (this.postCommentForm.valid) {
      this.postCommentClicked.emit(this.postCommentForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  closeDialog(): void {
    this.dialogCloseClicked.emit();
  }
}
