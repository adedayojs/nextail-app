import { Component, Input, OnInit } from '@angular/core';
import { IStockModel } from 'src/app/models/stock.model';
import { coverageDeterminant } from 'src/app/utils/stocks';

@Component({
  selector: 'app-stock-coverage-status',
  templateUrl: './stock-coverage-status.component.html',
  styleUrls: ['./stock-coverage-status.component.scss'],
})
export class StockCoverageStatusComponent implements OnInit {
  @Input() stock!: IStockModel;
  min = 0;
  max = 100;

  constructor() {}

  ngOnInit(): void {}
  get progressBarValue() {
    return this.stock.wh_coverage * 100;
  }

  get coverage(){
    return coverageDeterminant(this.progressBarValue)
  }
}
