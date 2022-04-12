import { Component, OnInit } from '@angular/core';
import { IStockModel } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stocks: Array<IStockModel> = [];
  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.fetchAllStocks();
  }

  fetchAllStocks() {
    this.stockService.fetchAllStock().subscribe((res) => {
      this.stocks = res;
    });
  }
}
