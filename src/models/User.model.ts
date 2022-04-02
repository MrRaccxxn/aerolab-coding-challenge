import { Product } from "./Product.model";

export interface User {
  _id: number;
  name: string;
  points: number;
  createDate: Date;
  redeemHistory: Product[];
  __v: number;
}
