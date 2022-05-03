import styled from "styled-components";

export const Container = styled.div`
  border-radius: 16px;
  width: 256px;
  height: 59px;
  border: 1px solid ${({ theme }) => theme.colors.dev.border};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  position: relative;

  .hidden {
    display: none;
  }

  .block {
    display: block;
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  .arrow {
    font-size: 10px;
  }
`;

export const SelectableList = styled.div`
  margin-top: 10px;
  width: 256px;
  border: 1px solid ${({ theme }) => theme.colors.dev.border};
  background: ${({ theme }) => theme.colors.neutral[0]};
  position: absolute;
  border-radius: 8px;
  padding: 8px 0px;
  z-index: 20;
`;

export const SelectableItem = styled.div`
  padding: 12px 24px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.light};
  }
`;
