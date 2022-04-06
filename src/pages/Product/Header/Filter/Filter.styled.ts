import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 40px;
  border-right: 1px solid ${({ theme }) => theme.colors.dev.border};
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    border-right: 0;
    padding-right: 0;
  }
`;
