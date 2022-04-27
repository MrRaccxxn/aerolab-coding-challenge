import { useState } from "react";
import { ProductTypes } from "../../types/Product.types";
import { Text } from "../Text";
import {
  Container,
  SelectableItem,
  SelectableList,
  TextContainer,
} from "./Dropdown.styled";
import { useDispatch } from "react-redux";
import { changeCategoryBy } from "../../redux/actions/product/product.action";

export const Dropdown = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>("All Products");
  const dispatch = useDispatch();

  return (
    <Container>
      <TextContainer onClick={() => setVisible(!visible)}>
        <Text>{text}</Text>
        <span className="arrow">{visible ? "▶" : "▼"} </span>
      </TextContainer>

      {visible ? (
        <SelectableList>
          {Object.values(ProductTypes).map((item) => (
            <SelectableItem
              key={item}
              onClick={() => {
                setText(item);
                dispatch(changeCategoryBy(item));
                setVisible(false);
              }}
            >
              <Text>{item}</Text>
            </SelectableItem>
          ))}
        </SelectableList>
      ) : (
        <></>
      )}
    </Container>
  );
};
