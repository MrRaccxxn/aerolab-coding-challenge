import styled from "styled-components";
import { theme } from "../../../../../styles";

export const Container = styled.div`
  background-color: ${theme.colors.neutral[0]};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid ${theme.colors.dev.border};
  padding: 16px 24px 24px 24px;
  width: min-content;
  height: 404px;
  position: absolute;
  top: 58px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
`;

export const Hr = styled.hr`
  position: absolute;
  top: 48px;
  height: 1px;
  width: 100%;
  border-width: 0;
  background-color: ${theme.colors.dev.border};
`;

export const PointsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 48px;
  align-items: center;

  .addPoints {
    z-index: 10;
  }
`;

export const SelectorSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;

  &:nth-child(1) {
    padding: 0 15px;
    background-color: red;
  }
`;
