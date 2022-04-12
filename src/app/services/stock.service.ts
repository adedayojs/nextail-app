import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockStock } from '../mock/stocks.mock';
import { IStockModel } from '../models/stock.model';
import { transformMockStocks } from '../utils/stocks';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  rawStocks = mockStock;
  refinedStock = transformMockStocks(mockStock);
  constructor() {}

  fetchAllStock(): Observable<Array<IStockModel>> {
    return of(this.refinedStock);
  }
}
