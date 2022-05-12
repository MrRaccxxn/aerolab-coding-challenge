import { useEffect, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../../styles";
import addDecimalPoints from "../../../../utils/AddDecimalPoints.util";
import { getNamedRequestState } from "../../../../utils/getNamedRequestState.util";
import { buyProduct } from "../../../../utils/redeemProduct";
import { Product } from "../../../components/Product";
import { Spinner } from "../../../components/Spinner";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {
  fetchProducts,
  orderData,
} from "../../../redux/actions/product/product.action";
import { addToast } from "../../../redux/actions/toast/toast.action";
import { LoaderState } from "../../../redux/reducers/loader/loader.reducer";
import { ProductState } from "../../../redux/reducers/product/product.reducer";
import { RootState } from "../../../redux/store";
import { RequestEnum } from "../../../redux/types/request.enum";
import { ToastEnum } from "../../../types/Toast.types";
import { BodyContainer, Container, ProductContainer } from "./Body.styled";
export const Body = () => {
  const dispatch = useDispatch();
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());
  const contractProcessor = useWeb3ExecuteFunction();
  const [userBalance, setUserBalance] = useState<number>(0);
  let itemsPerPage;

  const paginator = useSelector<RootState, ProductState["paginator"]>(
    (state) => state.ProductReducer.paginator
  );

  const { Moralis, account } = useMoralis();

  const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;
  const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
  Moralis.start({
    serverUrl,
    appId,
  });

  async function fetchProductsFromMoralis() {
    const Products = Moralis.Object.extend("Products");
    const query = new Moralis.Query(Products);
    const result = await (await query.find()).map((item) => item.attributes);

    itemsPerPage = mediumDevice ? 8 : 16;
    if (paginator.data == undefined)
      dispatch(fetchProducts(itemsPerPage, result));
    else dispatch(orderData(itemsPerPage));
  }

  useEffect(() => {
    if (account)
      Moralis.Web3API.account
        .getNativeBalance({
          chain: "mumbai",
          address: account!,
        })
        .then((result) => {
          const value = Moralis.Units.FromWei(result.balance);
          setUserBalance(parseInt(value));
        });

    fetchProductsFromMoralis();

    console.log(userBalance);
  }, [mediumDevice]);

  const [redeemId, setRedeemId] = useState<string>("");

  const requestState = useSelector<RootState, LoaderState>(
    (state) => state.LoaderReducer
  );

  const productsState = getNamedRequestState(
    requestState,
    RequestEnum.getProducts
  );

  const onRedeemProduct = async (
    productId: string,
    productName: string,
    cost: number
  ) => {
    setRedeemId(productId);

    if (account) {
      await buyProduct(
        parseInt(productId),
        productName,
        cost,
        Moralis,
        contractProcessor,
        dispatch
      );
    } else {
      dispatch(addToast(productName, ToastEnum.error));
    }
    setRedeemId("");
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
                    onClick={() =>
                      onRedeemProduct(
                        product._id,
                        product.name,
                        parseInt(product.cost)
                      )
                    }
                    isLoading={redeemId == product._id}
                    isDisabled={parseInt(product.cost) > userBalance}
                  ></Product>
                </ProductContainer>
              );
            })
        )}
      </BodyContainer>
    </Container>
  );
};
