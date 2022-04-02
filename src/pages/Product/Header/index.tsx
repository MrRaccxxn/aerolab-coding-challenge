import { theme } from "../../../../styles";
import { Text } from "../../../components/Text";
import { Filter, Title } from "./Header.styled";

export const Header = () => {
  return (
    <>
      {" "}
      <Title>
        <Text variant="h2" gradientColor={theme.colors.brand.default}>
          tech
        </Text>
        <Text variant="h2" color={theme.colors.neutral[900]}>
          products
        </Text>
      </Title>
      <Filter>
       
        <Text >
        Filter by:
        </Text>
        <Text variant="h2" color={theme.colors.neutral[900]}>
          products
        </Text>
      </Filter>
    </>
  );
};
