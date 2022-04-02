import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.neutral[900]};
  width: 264px;
  height: 148px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.neutral[0]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    width: 250px;
    height: 148px;
  }

  p {
    margin: 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .circleBox {
    background-color: ${({ theme }) => theme.colors.neutral[0]};
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .waves {
    content: "";
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    left: 0;
    overflow: hidden;
    object-fit: cover;
  }
`;
