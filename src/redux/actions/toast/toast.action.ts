import { ToastEnum } from "../../../types/Toast.types";
import { store } from "../../store";
import { ActionToast, ADD_TOAST, REMOVE_TOAST } from "./toast.types";

let id = 0;

export const addToast = (
  productName: string,
  toastType: ToastEnum
): ActionToast => {
  id++;
  setTimeout(() => store.dispatch(removeToast(id)), 3500);
  return {
    type: ADD_TOAST,
    payload: productName,
    toastType: toastType,
    id: id,
  };
};

export const removeToast = (id: number): ActionToast => {
  return {
    id: id,
    type: REMOVE_TOAST,
  };
};
