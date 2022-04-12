import { Component, Input, OnInit } from '@angular/core';
import { IStockModel } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
})
export class StockCardComponent implements OnInit {
  @Input() stock!: IStockModel;
  constructor() {}

  ngOnInit(): void {}
}
