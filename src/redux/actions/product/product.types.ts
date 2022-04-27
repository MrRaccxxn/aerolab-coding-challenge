export const SET_DATA = "SET_DATA";
export const ORDER_DATA = "ORDER_DATA";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const ORDER_BY = "ORDER_BY";

export type ActionProduct = {
  type: string;
  payload?: any;
  categoryBy?: string;
  sortBy?: string;
  itemsPerPage?: number;
};

export default () => {};
