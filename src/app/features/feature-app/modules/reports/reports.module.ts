import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { PanicAlertReportComponent } from "./components/panic-alert-report/panic-alert-report.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { PanicAlertReportContainerComponent } from "./containers/panic-alert-report-container/panic-alert-report-container.component";
import { ReportsContainerComponent } from "./containers/reports-container/reports-container.component";
import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsEffects } from "./store/reports.effects";
import * as fromReports from "./store/reports.reducer";
import { GatepassReportContainerComponent } from './containers/gatepass-report-container/gatepass-report-container.component';
import { GatepassReportComponent } from './components/gatepass-report/gatepass-report.component';

@NgModule({
  declarations: [
    PanicAlertReportContainerComponent,
    PanicAlertReportComponent,
    ReportsContainerComponent,
    ReportsComponent,
    GatepassReportContainerComponent,
    GatepassReportComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromReports.reportsFeatureKey, fromReports.reportsReducer),
    EffectsModule.forFeature([ReportsEffects]),
  ],
})
export class ReportsModule {}
