import { ToastEnum } from "../../../types/Toast.types";
import {
  ActionToast,
  ADD_TOAST,
  REMOVE_TOAST,
} from "../../actions/toast/toast.types";

export interface ToastProps {
  toastId: number;
  toastName: string;
  toastType: ToastEnum;
}

export interface ToastState {
  toastList: Array<ToastProps>;
}

const initialState: ToastState = {
  toastList: [],
};

export const ToastReducer = (
  state = initialState,
  action: ActionToast
): ToastState => {
  switch (action.type) {
    case ADD_TOAST: {
      return {
        toastList: [
          ...state.toastList,
          {
            toastId: action.id,
            toastName: action.payload!,
            toastType: action.toastType!,
          },
        ],
      };
      break;
    }

    case REMOVE_TOAST: {
      return {
        toastList: state.toastList.filter(
          (toast) => toast.toastId !== action.id
        ),
      };
      break;
    }

    default:
      return state;
      break;
  }
};
