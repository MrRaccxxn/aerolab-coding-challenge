import { Paginator } from "../../../models/Paginator";
import { Product } from "../../../models/Product.model";
import { ProductTypes } from "../../../types/Product.types";
import { SortEnum } from "../../../types/Sort.types";
import {
  ActionProduct,
  NEXT_PAGE,
  ORDER_DATA,
  PREVIOUS_PAGE,
  SET_DATA,
  REDEEM,
} from "../../actions/product/product.types";

export interface ProductState {
  paginator: Paginator<Product>;
}

const initialState: ProductState = {
  paginator: <any>{},
};

export const ProductReducer = (
  state = initialState,
  action: ActionProduct
): ProductState => {
  switch (action.type) {
    case SET_DATA: {
      return {
        paginator: {
          page: 1,
          firstItemIndex: 0,
          itemsPerPage: action.itemsPerPage!,
          totalItems: action.payload.length,
          totalPages: Math.ceil(action.payload.length / action.itemsPerPage!),
          data: Object.freeze(action.payload),
          dataFiltered: action.payload,
          sortBy: SortEnum.mostRecent,
          categoryBy: ProductTypes.AllProducts,
        },
      };
      break;
    }

    case ORDER_DATA: {
      const sorter =
        action.sortBy == undefined ? state.paginator.sortBy : action.sortBy;
      const category =
        action.categoryBy == undefined
          ? state.paginator.categoryBy
          : action.categoryBy;

      let dataFiltered = Object.values(state.paginator.data);

      if (sorter == SortEnum.highestPrice)
        dataFiltered.sort((a, b) =>
          parseFloat(a.cost) > parseFloat(b.cost) ? -1 : 1
        );

      if (sorter == SortEnum.lowestPrice)
        dataFiltered.sort((a, b) =>
          parseFloat(a.cost) > parseFloat(b.cost) ? 1 : -1
        );

      if (category != ProductTypes.AllProducts) {
        dataFiltered = dataFiltered.filter((item) => item.category == category);
      }

      const totalPages =
        dataFiltered.length /
        (action.itemsPerPage || state.paginator.itemsPerPage);

      return {
        paginator: {
          ...state.paginator,
          page: 1,
          firstItemIndex: 0,
          totalItems: dataFiltered.length,
          totalPages: totalPages <= 1 ? 1 : Math.ceil(totalPages),
          dataFiltered: dataFiltered,
          itemsPerPage:
            action.itemsPerPage != undefined &&
            action.itemsPerPage < dataFiltered.length
              ? action.itemsPerPage
              : dataFiltered.length,
          sortBy: sorter,
          categoryBy: category,
        },
      };
      break;
    }

    case REDEEM: {
      return {
        ...state,
      };
      break;
    }

    case NEXT_PAGE: {
      return {
        paginator: {
          ...state.paginator,
          page: state.paginator.page + 1,
          firstItemIndex:
            state.paginator.firstItemIndex + state.paginator.itemsPerPage,
        },
      };
      break;
    }

    case PREVIOUS_PAGE: {
      return {
        paginator: {
          ...state.paginator,
          page: state.paginator.page - 1,
          firstItemIndex:
            state.paginator.firstItemIndex - state.paginator.itemsPerPage,
        },
      };
      break;
    }

    default:
      return state;
      break;
  }
};
