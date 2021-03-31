import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @ViewChild("searchInput") searchInput: ElementRef;
  @Output() searched: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, "keyup")
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((event: any) => {
        this.searched.emit(event.target.value);
      });
  }

  getPlaceHolder() {
    return this.placeholder ?? this.translate.instant("search_placeholder");
  }
}
