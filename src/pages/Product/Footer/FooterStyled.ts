import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
  height: 340px;

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    height: 280px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1464px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextCounter = styled.div`
  width: 100%;
  height: 66px;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const PagerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
  }
`;

export const GitContainer = styled.div`
  clear: both;
  padding-top: 220px;
`;
