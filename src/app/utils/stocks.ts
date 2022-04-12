import { IStockBaseModel, IStockModel } from '../models/stock.model';

export function transformMockStocks(stock: IStockBaseModel[]): IStockModel[] {
  const processedStock: IStockModel[] = stock.map((stock) => {
    return {
      ...stock,
      isDeleted: false,
      imageUrl: `assets/images/${stock.code}.jpg`,
      size_stock: {
        L: 0,
        M: 0,
        S: 0,
        XL: 0,
        XS: 0,
        XXL: 0,
        ...stock.size_stock,
      },
    };
  });
  return processedStock;
}
