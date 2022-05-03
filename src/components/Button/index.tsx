import React, { HTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./Button.styled";

const defaultProps = {
  variant: "default",
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly disabled?: boolean;
  readonly variant: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  variant,
  onClick,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

Button.defaultProps = defaultProps;
