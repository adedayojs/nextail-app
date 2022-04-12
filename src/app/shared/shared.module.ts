import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { StockCoverageStatusComponent } from './components/stock-coverage-status/stock-coverage-status.component';
import { DecimalToPercentagePipe } from './pipes/decimal-to-percentage.pipe';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CoverageToStatusPipe } from './pipes/coverage-to-status.pipe';
import { ChartComponent } from './components/stock-card/chart/chart.component';

import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
@NgModule({
  declarations: [
    StockCardComponent,
    StockCoverageStatusComponent,
    DecimalToPercentagePipe,
    ProgressBarComponent,
    CoverageToStatusPipe,
    ChartComponent,
  ],
  imports: [CommonModule, FusionChartsModule],
  exports: [StockCardComponent, DecimalToPercentagePipe],
})
export class SharedModule {}
