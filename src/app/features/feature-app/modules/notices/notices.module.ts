import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { AddNoticeComponent } from "./components/add-notice/add-notice.component";
import { NoticeDetailComponent } from "./components/notice-detail/notice-detail.component";
import { NoticesComponent } from "./components/notices/notices.component";
import { NoticeDetailContainerComponent } from "./containers/notice-detail/notice-detail-container.component";
import { NoticesContainerComponent } from "./containers/notices/notices-container.component";
import { NoticesRoutingModule } from "./notices-routing.module";

@NgModule({
  declarations: [
    NoticesContainerComponent,
    NoticesComponent,
    NoticeDetailContainerComponent,
    NoticeDetailComponent,
    AddNoticeComponent,
  ],
  imports: [CommonModule, SharedModule, NoticesRoutingModule],
})
export class NoticesModule {}
