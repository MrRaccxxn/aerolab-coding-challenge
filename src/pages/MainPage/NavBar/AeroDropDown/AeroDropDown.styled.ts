import styled from "styled-components";
import { theme } from "../../../../../styles";

export const Container = styled.div`
  width: 180px;
  height: 48px;
  position: relative;

  .hidden {
    display: none;
  }

  .block {
    display: block;
  }
`;

export const DropButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.colors.dev.border};
  width: inherit;
  height: inherit;
  cursor: pointer;
  z-index: 10;

  .mainLogo {
    &:hover {
      cursor: pointer;
    }
  }
`;
