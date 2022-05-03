import { ToastEnum } from "../../../types/Toast.types";

export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";

export type ActionToast = {
  type: string;
  payload?: string;
  toastType?: ToastEnum;
  id: number;
};
