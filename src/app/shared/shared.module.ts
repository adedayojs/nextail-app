import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { StockCoverageStatusComponent } from './components/stock-coverage-status/stock-coverage-status.component';

@NgModule({
  declarations: [StockCardComponent, StockCoverageStatusComponent],
  imports: [CommonModule],
  exports: [StockCardComponent],
})
export class SharedModule {}
