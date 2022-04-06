import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: grid;
  gap: 48px 24px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  &:nth-child(1) {
    justify-content: center;
    align-items: center;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
