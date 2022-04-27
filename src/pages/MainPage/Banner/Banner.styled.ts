import styled from "styled-components";
import { theme } from "../../../../styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const BannerContainer = styled.div`
  max-width: 1464px;
  width: 100%;
  margin-top: 128px;
  padding-top: 144px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    height: 386px;
    align-items: center;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    align-items: center;
    text-align: center;
  }
`;

export const HeroImageContainer = styled.div`
  border-radius: 104px;
  width: 722px;
  height: 600px;
  background: ${theme.colors.specials.illustrationBg};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    margin-top: 336px;
    border-radius: 0;
    width: 100vw;
    height: 656px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}px) {
    margin-top: 270px;
    height: 1600px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    margin-top: 140px;
    height: 1500px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: max-content;
  height: 600px;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    position: relative;
    align-items: center;
    transform: scale(1);
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-105%);
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}px) {
    transform: translateX(-50%) translateY(-185%);
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    transform: translateX(-50%) translateY(-165%);
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  width: 318px;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    padding: 0 16px;
  }
`;
