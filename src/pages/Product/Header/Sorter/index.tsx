import { useState } from "react";
import { theme } from "../../../../../styles";
import { Selector } from "../../../../components/Selector";
import { Text } from "../../../../components/Text";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { Container, SelectorContainer } from "./Sorter.styled";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { SortEnum } from "../../../../types/Sort.types";
import { changeSortBy } from "../../../../redux/actions/product/product.action";

export const Sorter = () => {
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());
  const [selected, setSelected] = useState<string>(SortEnum.mostRecent);
  const dispatch = useDispatch();

  const sort = (sorter: string) => {
    setSelected(sorter);
    dispatch(changeSortBy(sorter, mediumDevice ? 8 : 16));
  };

  return (
    <Container>
      {mediumDevice ? <></> : <Text>Sort by:</Text>}

      {Object.values(SortEnum).map((sorter) => (
        <SelectorContainer key={sorter}>
          <Selector
            variant="sort"
            isSelected={selected == sorter}
            onClick={() => sort(sorter)}
          >
            <Text
              gradientColor={
                selected == sorter ? undefined : theme.colors.brand.default
              }
              color={selected == sorter ? theme.colors.neutral[0] : undefined}
            >
              {sorter}
            </Text>
          </Selector>
        </SelectorContainer>
      ))}
    </Container>
  );
};
