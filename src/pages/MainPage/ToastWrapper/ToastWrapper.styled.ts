import styled from "styled-components";

export const ToastWrapperStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999999999999999;
  bottom: 40px;
  left: 0;
  margin-left: 80px;
  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    margin-left: 20px;
  }
`;
