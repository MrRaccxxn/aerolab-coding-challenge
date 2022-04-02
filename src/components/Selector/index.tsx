import { ReactNode } from "react";
import { Container } from "./Selector.styled";

export interface ButtonProps {
  readonly children: ReactNode;
  readonly variant?: string;
  readonly isSelected?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const defaultProps = {
  isSelected: false,
  variant: "number",
};

export const Selector = (props: ButtonProps) => {
  return (
    <Container
      variant={props.variant}
      isSelected={props.isSelected}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  );
};

Selector.defaultProps = defaultProps;
