import { COVERAGE, IStockBaseModel, IStockModel } from '../models/stock.model';

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

/**
 * @description This function return the coverage value based on a measurement of 100
 * @description It takes a minimum of 0 and maximum of 100
 * @export
 * @param {number} num
 * @return {*}  {COVERAGE}
 */
export function coverageDeterminant(num: number): COVERAGE {
  if (num >= 75) {
    return COVERAGE.HIGH;
  }
  if (num >= 50 && num < 75) {
    return COVERAGE.MEDIUM;
  }
  if (num < 50) {
    return COVERAGE.LOW;
  }
  return COVERAGE.LOW;
}
