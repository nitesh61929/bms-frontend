import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CommentComponent } from "./components/comment/comment/comment.component";
import { HelpdeskDetailComponent } from "./components/helpdesk-detail/helpdesk-detail.component";
import { HelpdeskComponent } from "./components/helpdesk/helpdesk.component";
import { HelpdeskDetailContainerComponent } from "./containers/helpdesk-detail/helpdesk-detail-container.component";
import { HelpdeskContainerComponent } from "./containers/helpdesk/helpdesk-container.component";
import { HelpdeskRoutingModule } from "./helpdesk-routing.module";

@NgModule({
  declarations: [
    HelpdeskContainerComponent,
    HelpdeskComponent,
    HelpdeskDetailComponent,
    HelpdeskDetailContainerComponent,
    CommentComponent,
  ],
  imports: [CommonModule, SharedModule, HelpdeskRoutingModule],
})
export class HelpdeskModule {}
