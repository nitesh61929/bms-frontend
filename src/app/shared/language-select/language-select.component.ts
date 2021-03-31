import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components/base.component";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-language-select",
  templateUrl: "./language-select.component.html",
  styleUrls: ["./language-select.component.scss"],
})
export class LanguageSelectComponent extends BaseComponent implements OnInit {
  languages = [
    { value: "en", viewValue: "English" },
    { value: "np", viewValue: "Nepali" },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {}

  useLanguage(language?: string) {
    this.translate.use(language);
  }
}
