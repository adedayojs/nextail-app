import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { StockCoverageStatusComponent } from './components/stock-coverage-status/stock-coverage-status.component';
import { DecimalToPercentagePipe } from './pipes/decimal-to-percentage.pipe';

@NgModule({
  declarations: [
    StockCardComponent,
    StockCoverageStatusComponent,
    DecimalToPercentagePipe,
  ],
  imports: [CommonModule],
  exports: [StockCardComponent, DecimalToPercentagePipe],
})
export class SharedModule {}
