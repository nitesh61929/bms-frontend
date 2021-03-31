import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd } from "@angular/router";
import { delay, filter, map } from "rxjs/operators";
import { BaseComponent, ConstantsService } from "./core";
import { LoadingService } from "./core/services/loading/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent extends BaseComponent implements OnInit {
  loading: boolean = false;

  constructor(private title: Title, private activatedRoute: ActivatedRoute, private loadingService: LoadingService) {
    super();
    this.setDefaultLanguage();
  }

  /**
   * Set browser title
   */
  ngOnInit(): void {
    this.setBrowserTitle();
    this.listenToLoading();
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  /**
   * Set default language for app
   */
  private setDefaultLanguage(): void {
    const currentLanguage = ConstantsService.CURRENT_LANGUAGE;
    this.translate.setDefaultLang(currentLanguage);
  }

  /**
   * Set browser title from route data
   */
  private setBrowserTitle(): void {
    const appTitle = this.title.getTitle();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const titleString = "title";
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data[titleString]) {
            return child.snapshot.data[titleString];
          }
          return appTitle;
        })
      )
      .subscribe((titleString: string) => {
        const translatedTitle = this.translate.instant(titleString);
        this.title.setTitle(translatedTitle);
      });
  }
}
