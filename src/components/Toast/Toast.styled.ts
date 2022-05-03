import styled, { css, keyframes } from "styled-components";
import { theme } from "../../../styles";
import { ToastEnum } from "../../types/Toast.types";

const fadeIn = keyframes`
 0% { opacity: 0; } 100% { opacity: 1; }
`;

export const Container = styled.div<{
  variant: ToastEnum;
}>`
  width: 532px;
  height: 80px;
  display: flex;
  background-color: ${theme.colors.neutral[0]};
  border-radius: 12px;
  position: relative;
  animation: ${fadeIn} 0.8s ease-in-out 1 forwards;

  ${({ variant }) =>
    variant &&
    css`
      border: 2px solid
        ${variant == ToastEnum.succcess
          ? theme.colors.green.default
          : theme.colors.red.default};
    `}

  @media (max-width: 600px) {
    height: 96px;
    width: 360px;
  }
`;

export const ToastContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContainerLeft = styled.div`
  text-align: end;
  width: 10%;
`;

export const IconContainerRight = styled.div`
  text-align: start;
  width: 10%;

  &:hover {
    cursor: pointer;
  }
`;

export const TittleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 12px;
  text-align: start;
  width: 80%;
  gap: 5px;
`;
