import styled from "styled-components";
import { theme } from "../../../../../styles";

export const Container = styled.div`
  padding: 0 16px;
  width: 243px;
  height: 64px;
  border: 1px solid ${theme.colors.dev.border};
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.brand.light};

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    width: 36px;
    height: 36px;
  }

  .iconLeft {
    transform: rotate(180deg);
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const ColoredText = styled.div`
  display: flex;
  justify-content: center;
`;
