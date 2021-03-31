import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { Actions, ofType } from "@ngrx/effects";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { createHelpAndSupportSuccess } from "../../store/actions/help-and-support.actions";

@Component({
  selector: "app-help-and-support",
  templateUrl: "./help-and-support.component.html",
  styleUrls: ["./help-and-support.component.scss"],
})
export class HelpAndSupportComponent extends BaseComponent implements OnInit {
  @ViewChild("helpAndSupportForm") helpAndSupportForm: NgForm;
  @Output() createTicket: EventEmitter<any> = new EventEmitter<any>();
  @Input() error$: Observable<Error>;
  helpAndSupportFormGroup: FormGroup;
  destroyed$ = new Subject<boolean>();

  constructor(private createTicketSuccess$: Actions) {
    super();
    createTicketSuccess$.pipe(ofType(createHelpAndSupportSuccess), takeUntil(this.destroyed$)).subscribe(() => {
      this.snackBar.open(this.translate.instant("create_help_and_support_ticket_success"));
      this.helpAndSupportForm.resetForm();
    });
  }

  ngOnInit(): void {
    this.helpAndSupportFormGroup = this.formBuilder.group({
      summary: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(240)]],
      // description: ["", Validators.required],
    });

    this.error$.subscribe((err) => {
      if (err && this.helpAndSupportFormGroup) {
        this.errorMessageService.handleServerSideError(this.helpAndSupportFormGroup, err);
      }
    });
  }

  onCreateTicket() {
    if (this.helpAndSupportFormGroup.valid) {
      this.createTicket.emit(this.helpAndSupportFormGroup.value);
    } else {
      this.snackBar.open(this.getTranslatedString("invalid_form_message"));
    }
  }
}
