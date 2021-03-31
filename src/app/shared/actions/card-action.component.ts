import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card-action",
  templateUrl: "./card-action.component.html",
})
export class CardActionComponent implements OnInit {
  @Output() editClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() viewClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() deleteClicked: EventEmitter<null> = new EventEmitter<null>();
  @Input() canEdit: boolean;
  @Input() canView: boolean;
  @Input() canDelete: boolean;
  constructor() {}

  ngOnInit(): void {}

  onEdit() {
    this.editClicked.emit();
  }

  onView() {
    this.viewClicked.emit();
  }

  onDelete() {
    this.deleteClicked.emit();
  }
}
