import styled, { css } from "styled-components";

export interface IButtonSize {
  width: string;
  height: string;
}

interface IVariant {
  [key: string]: IButtonSize;
}

export const ButtonTypes: IVariant = {
  default: {
    width: "320px",
    height: "59px",
  },

  landing: {
    width: "278px",
    height: "80px",
  },
};

export const ButtonContainer = styled.button<{
  variant: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 16px;
  margin: 0;
  padding: 0 40px;
  background: ${({ theme }) => theme.colors.brand.default};
  color: white;
  cursor: pointer;

  ${({ variant }) =>
    variant &&
    ButtonTypes[variant] &&
    css`
      height: ${ButtonTypes[variant].height};
    `}

  &:hover {
    background: ${({ theme }) => theme.colors.brand.hover};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.colors.neutral[600]};
  }
`;
