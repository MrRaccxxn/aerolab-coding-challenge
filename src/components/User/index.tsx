import React from "react";
import { Icon, Modal, Card } from "web3uikit";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductState } from "../../redux/reducers/product/product.reducer";
import { Product } from "../../models/Product.model";
import { Container } from "./User.styled";

function User(account: any) {
  const [isVisible, setVisible] = useState(false);
  const { Moralis } = useMoralis();
  const [userProducts, setUserProducts] = useState(Array<Product>());

  const paginator = useSelector<RootState, ProductState["paginator"]>(
    (state) => state.ProductReducer.paginator
  );

  async function fetchPurchasedProducts() {
    const PurchasedProducts = Moralis.Object.extend("PurchasedProducts");
    const query = new Moralis.Query(PurchasedProducts);
    const result = await query.find();
    let products = new Array<Product>();
    const productIds = Object.values(result)
      .map((item) => item.attributes)
      .filter((item) => item.owner == account.account);
    if (paginator.data != undefined && productIds.length > 0)
      productIds.forEach((element) => {
        const product = paginator.data.find((item) => element.uid == item._id);
        products.push(product as Product);
      });

    setUserProducts(products);
  }

  useEffect(() => {
    fetchPurchasedProducts();
  }, [isVisible, paginator]);

  return (
    <Container>
      <div onClick={() => setVisible(true)}>
        <Icon fill="#000000" size={24} svg="user" />
      </div>

      <Modal
        onCloseButtonPressed={() => setVisible(false)}
        hasFooter={false}
        title="Your Products"
        isVisible={isVisible}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {userProducts &&
            userProducts.length > 0 &&
            userProducts.map((product: Product) => {
              return (
                <div style={{ width: "200px" }} key={product._id}>
                  <Card
                    isDisabled
                    title={product.name}
                    description={product.category}
                    key={product._id}
                  >
                    <div>
                      <img width="180px" src={product.img.url} />
                    </div>
                  </Card>
                </div>
              );
            })}
        </div>
      </Modal>
    </Container>
  );
}

export default User;
