import { useSelector } from "react-redux";
import { Toast } from "../../../components/Toast";
import { ToastState } from "../../../redux/reducers/toast/toast.reducer";
import { RootState } from "../../../redux/store";
import { ToastWrapperStyled } from "./ToastWrapper.styled";

export const ToastWrapper = () => {
  const toastList = useSelector<RootState, ToastState["toastList"]>(
    (state) => state.ToastReducer.toastList
  );

  return (
    <ToastWrapperStyled>
      {toastList.map((toast) => (
        <Toast
          key={toast.toastId}
          id={toast.toastId}
          type={toast.toastType}
          productName={toast.toastName}
        />
      ))}
    </ToastWrapperStyled>
  );
};
