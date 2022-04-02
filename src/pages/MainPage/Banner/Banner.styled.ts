import styled from "styled-components";
import { theme } from "../../../../styles";

export const BannerContainer = styled.div`
  width: 1464px;
  margin-top: 128px;
  padding-top: 144px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1500px) {
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1500px) {
    height: 386px;
    align-items: center;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1500px) {
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

  @media (max-width: 1500px) {
    margin-top: 336px;
    border-radius: 0;
    width: 100vw;
    height: 656px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: max-content;
  height: 600px;

  @media (max-width: 1500px) {
    position: relative;
    width: 60%;
    align-items: center;
    transform: scale(1);
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-80%);
  }


  @media (max-width: 1200px) {
    transform: translateX(-50%) translateY(-90%);
  }
`;
