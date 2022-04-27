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
  SET_DATA,
} from "../product/product.types";

const productService = ProductService.getInstance();

export const getProducts = (
  products: Product[],
  itemsPerPage: number
): ActionProduct => ({
  type: SET_DATA,
  payload: products,
  itemsPerPage: itemsPerPage,
});

export function fetchProducts(itemsPerPage: number) {
  return async (dispatch: Dispatch) => {
    await requestHelper(dispatch, RequestEnum.getProducts, async () => {
      await productService.getProducts().then((response) => {
        dispatch(getProducts(response, itemsPerPage));
      });
    });
  };
}

export const orderData = (itemsPerPage: number): ActionProduct => ({
  type: ORDER_DATA,
  itemsPerPage: itemsPerPage,
});

export const changeCategoryBy = (categoryBy: string): ActionProduct => ({
  type: ORDER_DATA,
  categoryBy: categoryBy,
});

export const changeSortBy = (sort: string): ActionProduct => ({
  type: ORDER_DATA,
  sortBy: sort,
});

export const nextPage = (): ActionProduct => ({
  type: NEXT_PAGE,
});

export const previousPage = (): ActionProduct => ({
  type: PREVIOUS_PAGE,
});
