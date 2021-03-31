import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appPassword]",
})
export class PasswordDirective {
  private shown = false;
  constructor(private el: ElementRef) {
    this.setup();
    this.el.nativeElement.setAttribute("type", "password");
  }

  toggle(italicIcon: HTMLElement) {
    this.shown = !this.shown;
    if (this.shown) {
      this.el.nativeElement.setAttribute("type", "text");
      italicIcon.setAttribute("class", "las la-eye-slash");
    } else {
      this.el.nativeElement.setAttribute("type", "password");
      italicIcon.setAttribute("class", "las la-eye");
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement("span");

    const italicIcon = document.createElement("i");
    italicIcon.setAttribute("class", "las la-eye");
    span.appendChild(italicIcon);

    span.addEventListener("click", (event) => {
      this.toggle(italicIcon);
    });
    parent.appendChild(span);
  }
}
