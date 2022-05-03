import { useSelector } from "react-redux";
import { theme } from "../../../../styles";
import { Text } from "../../../components/Text";
import { ProductState } from "../../../redux/reducers/product/product.reducer";
import { RootState } from "../../../redux/store";
import { Pager } from "../Header/Pager";
import {
  Container,
  FooterContainer,
  PagerContainer,
  TextCounter,
} from "./FooterStyled";

export const Footer = () => {
  const paginator = useSelector<RootState, ProductState["paginator"]>(
    (state) => state.ProductReducer.paginator
  );

  return (
    <Container>
      <FooterContainer>
        <TextCounter>
          <Text gradientColor={theme.colors.brand.hover}>
            {paginator.totalItems != 0 && paginator.totalItems != undefined
              ? (paginator.itemsPerPage * paginator.page).toString()
              : "0"}
          </Text>
          <Text>of</Text>
          <Text gradientColor={theme.colors.brand.hover}>
            {paginator.totalItems != 0 && paginator.totalItems != undefined
              ? paginator.totalItems.toString()
              : "0"}
          </Text>
          <Text>products</Text>
        </TextCounter>
        <PagerContainer>
          <Pager />
        </PagerContainer>
      </FooterContainer>
    </Container>
  );
};
