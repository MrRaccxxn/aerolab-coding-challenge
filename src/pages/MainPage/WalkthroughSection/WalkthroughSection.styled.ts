import styled from "styled-components";

export const Container = styled.div`
  margin-top: 200px;
  height: 800px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    height: 0;
    margin-top: 120px;
  }
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  height: 528px;
  width: 100%;
  background: ${({ theme }) => theme.colors.brand.default};
  margin-bottom: 1000px;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    height: 0;
  }
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
  width: 1464px;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    transform: translateX(-50%) translateY(-130%);
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}px) {
    transform: translateX(-50%) translateY(-110%);
    flex-direction: column;
  }
`;

export const IllustrationOne = styled.div`
  transform: translateY(60px) translateX(120px) rotate(-6deg);
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    transform: translateY(0) translateX(0) rotate(0deg);
  }

  &:hover {
    transition: 0.5s;
    transform: translateY(60px) translateX(120px) rotate(-6deg) scale(1.05);
    z-index: 10;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>")
        16 0,
      auto;
  }
`;

export const IllustrationTwo = styled.div`
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    transform: translateY(0) translateX(0) rotate(0deg);
  }

  &:hover {
    transition: 0.5s;
    z-index: 10;
    transform: scale(1.05);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👊🏼</text></svg>")
        16 0,
      auto;
  }
`;

export const IllustrationThree = styled.div`
  transform: translateY(60px) translateX(-120px) rotate(6deg);
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    transform: translateY(0) translateX(0) rotate(0deg);
  }

  &:hover {
    transition: 0.5s;
    z-index: 10;
    transform: translateY(60px) translateX(-120px) rotate(6deg) scale(1.05);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🌈</text></svg>")
        16 0,
      auto;
  }
`;
