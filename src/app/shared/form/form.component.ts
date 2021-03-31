import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IFormOption } from "./interfaces";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  @Output() primaryButtonClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() accentButtonClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() optionalButtonClicked: EventEmitter<null> = new EventEmitter<null>();
  @Input() formOption: IFormOption;

  constructor() {}

  ngOnInit(): void {}

  onPrimarytButtonClick() {
    this.primaryButtonClicked.emit();
  }

  onAccentButtonClick() {
    this.accentButtonClicked.emit();
  }

  onOptionalButtonClick() {
    this.optionalButtonClicked.emit();
  }
}
