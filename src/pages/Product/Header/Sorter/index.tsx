import { theme } from "../../../../../styles";
import { Selector } from "../../../../components/Selector";
import { Text } from "../../../../components/Text";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { Container, SelectorContainer } from "./Sorter.styled";

export const Sorter = () => {
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());

  return (
    <Container>
      {mediumDevice ? <></> : <Text>Sort by:</Text>}

      <SelectorContainer>
        <Selector variant="sort">
          <Text>Most Recent</Text>
        </Selector>
      </SelectorContainer>
      <SelectorContainer>
        <Selector variant="sort">
          <Text>Lowest Price</Text>
        </Selector>
      </SelectorContainer>
      <SelectorContainer>
        <Selector variant="sort">
          <Text>Highest Price</Text>
        </Selector>
      </SelectorContainer>
    </Container>
  );
};
