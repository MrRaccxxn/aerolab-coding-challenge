import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SpinnerAnimation = styled.div`
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;
