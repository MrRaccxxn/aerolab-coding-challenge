import { ProductTypes } from "../types/Product.types";

export interface Product {
  img: ImageType;
  _id: string;
  name: string;
  cost: string;
  category: ProductTypes;
}

export interface ImageType {
  url: string;
  hdUrl: string;
}
