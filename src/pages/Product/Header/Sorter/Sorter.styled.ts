import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    overflow-x: scroll;
    width: 100%;
    margin-top: 26px;
    order: 3;
  }
`;

export const SelectorContainer = styled.div`
  width: max-content;
`;
