import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { BaseComponent } from "@core/components";
import { IValidationErrorMessages } from "./../error-messages/interfaces/validation-error-messages";
import { IFilterOptions } from "./interfaces/filter-options";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
})
export class ListComponent extends BaseComponent implements OnInit {
  @ContentChild(TemplateRef) templateVariable: TemplateRef<any>;
  @ViewChild(MatMenuTrigger) clickMenuTrigger: MatMenuTrigger;
  @Output() searched: EventEmitter<string> = new EventEmitter<string>();
  @Output() applyFilters: EventEmitter<any> = new EventEmitter<any>();
  @Input() items: any[];
  @Input() activeItem: any;
  @Input() enableSearch: boolean = false;
  @Input() search: string = null;
  @Input() statusFilterOptions: Array<any>;
  @Input() typeFilterOptions: Array<any>;
  @Input()
  enableFilters: boolean = false;
  @Input() filterOptions: IFilterOptions;
  dateRangeForm;
  FormGroup;
  statusFilter: any;
  typeFilter: any;
  customValidationErrorMessages: IValidationErrorMessages;

  constructor() {
    super();
  }

  ngOnInit() {
    this.setDateRangeForm();
    this.setCustomValidationErrorMessages();
  }

  setCustomValidationErrorMessages() {
    this.customValidationErrorMessages = {
      required: this.translate.instant("validation_messages.end_date_required"),
    };
  }

  setDateRangeForm() {
    this.dateRangeForm = this.formBuilder.group({
      startDate: [""],
      endDate: [""],
    });
  }

  onSearch(searchValue: string) {
    this.searched.emit(searchValue);
  }

  getActiveItem(item: any) {
    if (item && this.activeItem) {
      return item.id === this.activeItem.id;
    }
  }

  onApplyFilters() {
    const filters = {
      status: this.statusFilter || this.statusFilter === false ? this.statusFilter : null,
      dateRange: this.dateRangeForm.valid ? this.dateRangeForm.value : null,
      type: this.typeFilter ? this.typeFilter : null,
    };
    this.clickMenuTrigger.closeMenu();
    this.applyFilters.emit(filters);
  }

  onStatusChange(event: any) {
    this.statusFilter = event.value;
  }

  onTypeChange(event: any) {
    this.typeFilter = event.value;
  }

  getClass() {
    if (this.enableSearch && !this.enableFilters) {
      return "contains-lists has-search-filter-only";
    } else if (this.enableSearch && this.enableFilters) {
      return "contains-lists has-multiple-filters";
    } else {
      return "contains-lists";
    }
  }

  clearDateRange() {
    this.dateRangeForm.reset();
    this.dateRangeForm.markAsPristine();
    this.dateRangeForm.markAsUntouched();
    this.dateRangeForm.updateValueAndValidity();
  }
}
