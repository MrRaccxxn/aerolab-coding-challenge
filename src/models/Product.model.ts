import { ProductTypes } from "../types/Product.types";

export interface Product {
  img: number;
  _id: number;
  name: string;
  cost: number;
  category: ProductTypes;
}
