import styled, { css } from "styled-components";
import { theme } from "../../../styles";
import { ButtonProps } from "../Button";

export interface ISelectorSize {
  width: string;
  height: string;
}

interface IVariant {
  [key: string]: ISelectorSize;
}

export const SelectorTypes: IVariant = {
  sort: {
    width: "129px",
    height: "43px",
  },

  number: {
    width: "81px",
    height: "35px",
  },
};

export const Container = styled.button.attrs(
  (props: { variant: string; isSelected: boolean }) => props
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 12px;
  margin: 0 2px;
  padding: 0 20px;
  cursor: pointer;
  background: ${(props) =>
    props.isSelected ? theme.colors.brand.default : theme.colors.brand.light};

  height: ${(props) => SelectorTypes[props.variant].height};
`;
