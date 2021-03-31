import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { HelpdeskCategoryComponent } from "./components/helpdesk-category/helpdesk-category.component";
import { HelpdeskCategoryContainerComponent } from "./containers/helpdesk-category/helpdesk-category-container.component";
import { HelpdeskCategoryRoutingModule } from "./helpdesk-category-routing.module";
import { HelpDeskCategoryEffects } from "./store/effects/helpdesk-category.effects";
import { helpdeskCategoryReducer } from "./store/reducers/helpdesk-category.reducers";
import { AddHelpdeskCategoryComponent } from './components/add-helpdesk-category/add-helpdesk-category.component';

@NgModule({
  declarations: [HelpdeskCategoryContainerComponent, HelpdeskCategoryComponent, AddHelpdeskCategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpdeskCategoryRoutingModule,
    StoreModule.forFeature("helpdeskCategory", helpdeskCategoryReducer),
    EffectsModule.forFeature([HelpDeskCategoryEffects]),
  ],
})
export class HelpdeskCategoryModule {}
