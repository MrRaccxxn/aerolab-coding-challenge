import { useTheme } from "styled-components";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { TextTypes } from "./Text.styled";

interface TextProps {
  variant: string;
  children: ReactNode;
  color?: string;
  gradientColor?: string;
}

const defaultProps = {
  variant: "default",
};

const Typograpohy = styled.p<{
  variant: string;
}>`
  display: flex;
  align-items: center;

  ${({ variant }) =>
    variant &&
    TextTypes[variant] &&
    css`
      font-family: ${TextTypes[variant].fontFamily};
      font-size: ${TextTypes[variant].desktopFontSize};
      font-weight: ${TextTypes[variant].fontWeight};
      line-height: ${TextTypes[variant].lineHeight};
      letter-spacing: ${TextTypes[variant].letterSpacing};
      color: ${({ theme }) => theme.colors.neutral[600]};
      text-transform: ${TextTypes[variant].textStyle};

      @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
        font-size: ${TextTypes[variant].mobileFontSize};
      }
    `}
`;

export const Text = (props: TextProps) => {
  return (
    <Typograpohy
      {...props}
      variant={props.variant}
      style={
        props.gradientColor != undefined
          ? {
              backgroundImage: props.gradientColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }
          : {
              color: props.color,
            }
      }
    >
      {props.children}
    </Typograpohy>
  );
};

Text.defaultProps = defaultProps;
