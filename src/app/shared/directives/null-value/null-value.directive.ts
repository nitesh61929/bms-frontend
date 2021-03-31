import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[appNullValue]",
})
export class NullValueDirective {
  @Output() emptyToNull: EventEmitter<string> = new EventEmitter<string>();

  @HostListener("keyup", ["$event.target"]) onKeyDowns(target: HTMLInputElement) {
    this.emptyToNull.emit(target.value === "" ? null : target.value);
  }

  constructor() {}
}
