import { Dispatch } from "redux";
import { Product } from "../../../models/Product.model";
import { ProductService } from "../../../services/product.service";
import { requestHelper } from "../../reducers/loader/request.helper";
import { RequestEnum } from "../../types/request.enum";

import {
  ActionProduct,
  NEXT_PAGE,
  ORDER_DATA,
  PREVIOUS_PAGE,
  REDEEM,
  SET_DATA,
} from "../product/product.types";
import { fetchUser } from "../user/user.actions";
import { url } from "inspector";
const productService = ProductService.getInstance();

export const getProducts = (
  products: Product[],
  itemsPerPage: number
): ActionProduct => ({
  type: SET_DATA,
  payload: products,
  itemsPerPage: itemsPerPage,
});

export const redeem = (): ActionProduct => ({
  type: REDEEM,
});

export function fetchProducts(itemsPerPage: number, products: Array<any>) {
  return async (dispatch: Dispatch) => {
    await requestHelper(dispatch, RequestEnum.getProducts, async () => {
      let convertedProducts: Product[] = [];

      products.forEach((product) => {
        let img = {
          url: product.url,
          hdUrl: product.hdUrl,
        };

        convertedProducts.push({
          img: img,
          _id: product.uid,
          name: product.name,
          cost: product.cost,
          category: product.category,
        });
      });

      dispatch(getProducts(convertedProducts, itemsPerPage));
    });
  };
}

export function redeemProduct(productId: string) {
  return async (dispatch: Dispatch) => {
    await requestHelper(dispatch, RequestEnum.redeemProduct, async () => {
      await productService.redeem(productId).then((response) => {
        dispatch(redeem());
      });
    });
  };
}

export const orderData = (itemsPerPage: number): ActionProduct => ({
  type: ORDER_DATA,
  itemsPerPage: itemsPerPage,
});

export const changeCategoryBy = (
  categoryBy: string,
  itemsPerPage: number
): ActionProduct => ({
  type: ORDER_DATA,
  itemsPerPage: itemsPerPage,
  categoryBy: categoryBy,
});

export const changeSortBy = (
  sort: string,
  itemsPerPage: number
): ActionProduct => ({
  type: ORDER_DATA,
  itemsPerPage: itemsPerPage,
  sortBy: sort,
});

export const nextPage = (): ActionProduct => ({
  type: NEXT_PAGE,
});

export const previousPage = (): ActionProduct => ({
  type: PREVIOUS_PAGE,
});
