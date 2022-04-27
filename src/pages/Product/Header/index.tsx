import { theme } from "../../../../styles";
import { Text } from "../../../components/Text";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Filter } from "./Filter";
import {
  Container,
  FilterContainer,
  HeaderContainer,
  Title,
} from "./Header.styled";
import { Pager } from "./Pager";
import { Sorter } from "./Sorter";

export const Header = () => {
  const deviceSize = useMediaQuery("800");

  return (
    <Container>
      <HeaderContainer>
        <Title>
          <Text variant="h2" gradientColor={theme.colors.brand.default}>
            tech
          </Text>
          &nbsp; &nbsp;
          <Text variant="h2" color={theme.colors.neutral[900]}>
            products
          </Text>
        </Title>

        <FilterContainer>
          <Filter />
          <Sorter />
          {deviceSize ? <></> : <Pager />}
        </FilterContainer>
      </HeaderContainer>
    </Container>
  );
};
