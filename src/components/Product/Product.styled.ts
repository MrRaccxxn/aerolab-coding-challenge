import styled from "styled-components";

export const Container = styled.div`
  width: 348px;
  height: 506px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutral[0]};

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    max-width: 335px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 348px;
  height: 431px;
  border: 1px solid ${({ theme }) => theme.colors.dev.border};
  border-radius: 16px;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    max-width: 335px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 345px;
`;

export const ImageSize = styled.div`
  width: 70%;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.dev.border};
`;

export const TextDescription = styled.div`
  width: 100%;
`;

export const TextContainer = styled.div`
  padding: 16px 24px;
`;
