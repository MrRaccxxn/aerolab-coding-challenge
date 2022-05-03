import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../../../styles";
import { Text } from "../../../../components/Text";
import {
  nextPage,
  previousPage,
} from "../../../../redux/actions/product/product.action";
import { ProductState } from "../../../../redux/reducers/product/product.reducer";
import { RootState } from "../../../../redux/store";
import { BoxIcon, ColoredText, Container } from "./Pager.styled";

export const Pager = () => {
  const dispatch = useDispatch();

  const paginator = useSelector<RootState, ProductState["paginator"]>(
    (state) => state.ProductReducer.paginator
  );

  function _previousPage() {
    if (paginator.page > 1) dispatch(previousPage());
  }

  function _nextPage() {
    if (paginator.page < paginator.totalPages) dispatch(nextPage());
  }

  return (
    <Container>
      <BoxIcon onClick={() => _previousPage()}>
        <Image
          src={"/icons/chevron-default.svg"}
          width={18}
          height={18}
          className="iconLeft"
        />
      </BoxIcon>

      <ColoredText>
        <Text>Page&nbsp;</Text>
        <Text gradientColor={theme.colors.brand.default}>
          {paginator.page} of {paginator.totalPages}
        </Text>
      </ColoredText>

      <BoxIcon onClick={() => _nextPage()}>
        <Image src={"/icons/chevron-default.svg"} width={18} height={18} />
      </BoxIcon>
    </Container>
  );
};
