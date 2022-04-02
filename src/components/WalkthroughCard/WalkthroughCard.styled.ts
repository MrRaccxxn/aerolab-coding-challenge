import styled, { css } from "styled-components";
import { theme } from "../../../styles";

export const IntroCardBackground = styled.div`
  width: 532px;
  height: 676px;
  border: 1px solid ${theme.colors.dev.border};
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: 32px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}px) {
    width: 323px;
    height: 477px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    width: 335px;
    height: 408px;
  }
`;

export const IntroCard = styled.div`
  margin: 12px;
  background-color: white;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
`;

export const TopCard = styled.div<{
  backgroundColor: string;
}>`
  width: 508px;
  height: 498px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-self: center;
  display: flex;
  align-items: end;
  justify-content: center;

  img {
    width: 100%;
  }

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background: ${backgroundColor};
    `}

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}px) {
    width: 299px;
    height: 313px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    width: 311px;
    height: 244px;
  }
`;

export const BottomCard = styled.div`
  height: 154px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: initial;
  padding: 0 24px 0 24px;
  border: 1px solid ${theme.colors.dev.border};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    height: 140px;
  }
`;

export const TitleAndIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: inherit;
  align-items: center;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.brand.light};
  margin-right: 16px;

  > {
    width: 100px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}px) {
    width: 40px;
    height: 40px;
  }
`;
