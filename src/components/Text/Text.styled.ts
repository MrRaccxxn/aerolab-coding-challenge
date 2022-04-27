import { HTMLAttributes } from "react";

export interface ITextInfo extends HTMLAttributes<HTMLParagraphElement> {
  fontFamily: string;
  desktopFontSize: string;
  mobileFontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  textStyle: string;
}

interface IVariant {
  [key: string]: ITextInfo;
}

export const TextTypes: IVariant = {
  h1: {
    fontFamily: "MonserratBlack",
    desktopFontSize: "200px",
    mobileFontSize: "96px",
    fontWeight: "900",
    lineHeight: "80%",
    letterSpacing: "0",
    textStyle: "uppercase",
  },

  h2: {
    fontFamily: "MonserratBlack",
    desktopFontSize: "48px",
    mobileFontSize: "32px",
    fontWeight: "900",
    lineHeight: "80%",
    letterSpacing: "0",
    textStyle: "uppercase",
  },

  h3: {
    fontFamily: "MonserratBlack",
    desktopFontSize: "32px",
    mobileFontSize: "24px",
    fontWeight: "900",
    lineHeight: "100%",
    letterSpacing: "0",
    textStyle: "uppercase",
  },

  default: {
    fontFamily: "Monserrat",
    desktopFontSize: "18px",
    mobileFontSize: "16px",
    fontWeight: "bold",
    lineHeight: "150%",
    letterSpacing: "0",
    textStyle: "none",
  },

  bodyTitle: {
    fontFamily: "Monserrat",
    desktopFontSize: "18px",
    mobileFontSize: "16px",
    fontWeight: "semibold",
    lineHeight: "150%",
    letterSpacing: "24%",
    textStyle: "uppercase",
  },

  bodyMedium: {
    fontFamily: "Monserrat",
    desktopFontSize: "18px",
    mobileFontSize: "16px",
    fontWeight: "medium",
    lineHeight: "150%",
    letterSpacing: "0",
    textStyle: "none",
  },

  detail: {
    fontFamily: "Monserrat",
    desktopFontSize: "14px",
    mobileFontSize: "12px",
    fontWeight: "semibold",
    lineHeight: "150%",
    letterSpacing: "0",
    textStyle: "none",
  },

  detailSpace: {
    fontFamily: "Monserrat",
    desktopFontSize: "14px",
    mobileFontSize: "12px",
    fontWeight: "semibold",
    lineHeight: "150%",
    letterSpacing: "5%",
    textStyle: "none",
  },
};
