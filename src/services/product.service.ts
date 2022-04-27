import { HttpClient } from "../core/services/HttpClient";
import { Product } from "../models/Product.model";

export class ProductService extends HttpClient {
  private static classInstance?: ProductService;

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ProductService();
    }

    return this.classInstance;
  }

  public getProducts = async () => await this.instance.get<Product[]>(`products`);
}
