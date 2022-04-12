import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockStock } from '../mock/stocks.mock';
import { IStockModel } from '../models/stock.model';
import { transformMockStocks } from '../utils/stocks';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private rawStocks = mockStock;
  private refinedStock = transformMockStocks(mockStock);
  constructor() {}

  fetchAllStock(): Observable<Array<IStockModel>> {
    // Simulate API call
    return of(this.refinedStock);
  }
  removeStock(id: number) {
    const stockIndex = this.refinedStock.findIndex(
      (stock) => stock.code === id
    );
    if (stockIndex > -1) {
      this.refinedStock.splice(stockIndex, 1);
    }
  }
}
