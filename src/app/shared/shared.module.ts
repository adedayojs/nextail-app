import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { StockCoverageStatusComponent } from './components/stock-coverage-status/stock-coverage-status.component';
import { DecimalToPercentagePipe } from './pipes/decimal-to-percentage.pipe';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CoverageToStatusPipe } from './pipes/coverage-to-status.pipe';

@NgModule({
  declarations: [
    StockCardComponent,
    StockCoverageStatusComponent,
    DecimalToPercentagePipe,
    ProgressBarComponent,
    CoverageToStatusPipe,
  ],
  imports: [CommonModule],
  exports: [StockCardComponent, DecimalToPercentagePipe],
})
export class SharedModule {}
