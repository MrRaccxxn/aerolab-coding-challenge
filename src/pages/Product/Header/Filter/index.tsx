import { FilterContainer } from "./Filter.styled";
import { Text } from "../../../../components/Text";
import { Dropdown } from "../../../../components/Dropdown";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { theme } from "../../../../../styles";

export const Filter = () => {
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());

  return (
    <FilterContainer>
      {mediumDevice ? <></> : <Text>Filter by:</Text>}
      <Dropdown></Dropdown>
    </FilterContainer>
  );
};
