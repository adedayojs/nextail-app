export interface IStockBaseModel {
  code: number;
  name: string;
  price: number;
  sales_ranking: number;
  stockout_rate: number;
  wh_coverage: number;
  size_stock: IStockSize;
}
interface IStockSize {
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
}

export interface IStockModel extends IStockBaseModel {
  isDeleted: boolean;
  imageUrl: string;
}
