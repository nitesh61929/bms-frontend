import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddNoticePopupComponent } from "../design-add-notice-popup/design-add-notice-popup.component";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

export interface INoticeBoard {
  sn: number;
  news_image: string;
  news_title: string;
  updated_date: string;
  status: string;
  news_detail: any;
}

const NEWS_DATA: INoticeBoard[] = [
  {
    sn: 1,
    news_image: "/assets/images/placeholder-img.jpg",
    news_title: "This is news title of the notice On Board Component",
    updated_date: "Fri Oct 30, 2020",
    status: "published",
    news_detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt     in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    sn: 2,
    news_image: "/assets/images/placeholder-img.jpg",
    news_title: "This is news title of the notice On Board Component",
    updated_date: "Fri Oct 30, 2020",
    status: "unpublished",
    news_detail:
      "Supplied directly pleasant we ignorant ecstatic of jointure so if. These spoke house of we. Ask put yet excuse person see change. Do inhabiting no stimulated unpleasing of admiration he. Enquire explain another he in brandon enjoyed be service. Given mrs she first china. Table party no or trees an while it since. On oh celebrated at be announcing dissimilar insipidity. Ham marked engage oppose cousin ask add yet. ",
  },
];

@Component({
  selector: "app-design-notice-board",
  templateUrl: "./design-notice-board.component.html",
  styleUrls: ["./design-notice-board.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignNoticeBoardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ["sn", "news_title", "updated_date", "status"];
  dataSource = NEWS_DATA;
  expandedElement: INoticeBoard | null;

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DesignAddNoticePopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
