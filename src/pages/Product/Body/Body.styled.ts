import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BodyContainer = styled.div`
  width: 100%;
  max-width: 1464px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  display: grid;
  gap: 48px 12px;
  grid-template-columns: repeat(auto-fit, minmax(348px, 1fr));

  &:nth-child(1) {
    justify-content: center;
    align-items: center;
  }
`;

const fadeIn = keyframes`
 0% { opacity: 0; } 100% { opacity: 1; }
`;

export const ProductContainer = styled.div<{
  transitionDelay: number;
}>`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-in-out 1 forwards;

  ${({ transitionDelay }) =>
    transitionDelay &&
    css`
      animation-delay: ${transitionDelay}s;
    `}
`;
