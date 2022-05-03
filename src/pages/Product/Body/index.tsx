import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../../styles";
import addDecimalPoints from "../../../../utils/AddDecimalPoints.util";
import { getNamedRequestState } from "../../../../utils/getNamedRequestState.util";
import { Product } from "../../../components/Product";
import { Spinner } from "../../../components/Spinner";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {
  fetchProducts,
  orderData,
  redeemProduct,
} from "../../../redux/actions/product/product.action";
import {
  addToast,
  removeToast,
} from "../../../redux/actions/toast/toast.action";
import { fetchUser } from "../../../redux/actions/user/user.actions";
import { LoaderState } from "../../../redux/reducers/loader/loader.reducer";
import { ProductState } from "../../../redux/reducers/product/product.reducer";
import { UserState } from "../../../redux/reducers/user/user.reducer";
import { RootState } from "../../../redux/store";
import { RequestEnum } from "../../../redux/types/request.enum";
import { ToastEnum } from "../../../types/Toast.types";
import { BodyContainer, Container, ProductContainer } from "./Body.styled";
export const Body = () => {
  const dispatch = useDispatch();
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());
  let itemsPerPage;

  const paginator = useSelector<RootState, ProductState["paginator"]>(
    (state) => state.ProductReducer.paginator
  );

  useEffect(() => {
    itemsPerPage = mediumDevice ? 8 : 16;
    if (paginator.data == undefined) dispatch(fetchProducts(itemsPerPage));
    else dispatch(orderData(itemsPerPage));
  }, [mediumDevice]);

  const [redeemId, setRedeemId] = useState<string>("");

  const requestState = useSelector<RootState, LoaderState>(
    (state) => state.LoaderReducer
  );

  const user = useSelector<RootState, UserState["user"]>(
    (state) => state.UserReducer.user
  );

  const productsState = getNamedRequestState(
    requestState,
    RequestEnum.getProducts
  );

  const singularProductState = getNamedRequestState(
    requestState,
    RequestEnum.redeemProduct
  );

  const onRedeemProduct = async (productId: string, productName: string) => {
    setRedeemId(productId);
    await dispatch(redeemProduct(productId));
    dispatch(fetchUser());
    dispatch(addToast(productName, ToastEnum.succcess));
  };

  return (
    <Container>
      <BodyContainer>
        {productsState ? (
          <Spinner />
        ) : (
          paginator.dataFiltered != undefined &&
          paginator.dataFiltered.length > 0 &&
          paginator.dataFiltered
            ?.slice(
              paginator.firstItemIndex,
              paginator.itemsPerPage * paginator.page
            )
            .map((product, i) => {
              return (
                <ProductContainer key={product._id} transitionDelay={i * 0.08}>
                  <Product
                    key={product._id}
                    id={product._id}
                    img={product.img.url}
                    name={product.name}
                    cost={addDecimalPoints(parseInt(product.cost)).toString()}
                    category={product.category}
                    onClick={() => onRedeemProduct(product._id, product.name)}
                    isLoading={redeemId == product._id && singularProductState}
                    isDisabled={parseInt(product.cost) >= user.points}
                  ></Product>
                </ProductContainer>
              );
            })
        )}
      </BodyContainer>
    </Container>
  );
};
