import styled from "styled-components";
import { Body } from "./Body";
import { Header } from "./Header";

const Hola = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ProductSection = () => {
  return (
    <Hola>
      <Header />
      <Body />
    </Hola>
  );
};
