import Image from "next/image";
import { useDispatch } from "react-redux";
import { theme } from "../../../styles";
import { removeToast } from "../../redux/actions/toast/toast.action";
import { ToastEnum } from "../../types/Toast.types";
import { Text } from "../Text";
import {
  Container,
  IconContainerLeft,
  IconContainerRight,
  TittleContainer,
  ToastContainer,
} from "./Toast.styled";

export interface ToastProps {
  id: number;
  type: ToastEnum;
  productName?: string;
}

export const Toast = (props: ToastProps) => {
  const dispatch = useDispatch();

  return (
    <Container variant={props.type}>
      <ToastContainer>
        <IconContainerLeft>
          <Image
            src={
              props.type == ToastEnum.error
                ? "/icons/system-error.svg"
                : "/icons/system-success.svg"
            }
            width={26}
            height={26}
          />
        </IconContainerLeft>
        <TittleContainer>
          {props.type == ToastEnum.error ? (
            <Text>There was a problem with the transaction</Text>
          ) : (
            <>
              <Text color={theme.colors.neutral[900]}>{props.productName}</Text>
              <Text>redeemed successfully</Text>
            </>
          )}
        </TittleContainer>

        <IconContainerRight onClick={() => dispatch(removeToast(props.id))}>
          <Image src={"/icons/cross-default.svg"} width={26} height={26} />
        </IconContainerRight>
      </ToastContainer>
    </Container>
  );
};
