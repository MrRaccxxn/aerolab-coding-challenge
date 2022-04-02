import styled from "styled-components";
import { theme } from "../../../../styles";

export const Container = styled.div`
  margin-top: 200px;
  height: 1000px;
  width: 100%;
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  height: 528px;
  width: 100%;
  background: ${({ theme }) => theme.colors.brand.default};
  margin-bottom: 1000px;
`;

export const WalkthroughContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IllustrationOne = styled.div`
  transform: translateY(60px) translateX(30px) rotate(-6deg) ;
  z-index: 1;
`;

export const IllustrationTwo = styled.div`
  z-index: 2;
`;

export const IllustrationThree = styled.div`
  transform: translateY(60px) translateX(-30px) rotate(6deg);
  z-index: 3;
`;
