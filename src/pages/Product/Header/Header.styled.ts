import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  max-width: 1464px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    width: 100%;
  }
`;
