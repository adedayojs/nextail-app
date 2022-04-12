import { Component, Input, OnInit } from '@angular/core';
import { IStockModel } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-coverage-status',
  templateUrl: './stock-coverage-status.component.html',
  styleUrls: ['./stock-coverage-status.component.scss'],
})
export class StockCoverageStatusComponent implements OnInit {
  @Input() stock!: IStockModel;
  constructor() {}

  ngOnInit(): void {}
}
