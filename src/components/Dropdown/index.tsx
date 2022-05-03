import { useEffect, useRef, useState } from "react";
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
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../../styles";

export const Dropdown = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>(ProductTypes.AllProducts);
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());
  let ref = useRef<HTMLDivElement>(null);
  let visibleButton = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }

      if (
        visibleButton.current &&
        visibleButton.current.contains(event.target)
      ) {
        setVisible(!visible);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Container>
      <TextContainer ref={visibleButton}>
        <Text>{text}</Text>
        <span className="arrow">{visible ? "▶" : "▼"} </span>
      </TextContainer>

      <SelectableList ref={ref} className={visible ? "block" : "hidden"}>
        {Object.values(ProductTypes).map((item) => (
          <SelectableItem
            key={item}
            onClick={() => {
              setText(item);
              dispatch(changeCategoryBy(item, mediumDevice ? 8 : 16));
              setVisible(false);
            }}
          >
            <Text>{item}</Text>
          </SelectableItem>
        ))}
      </SelectableList>
    </Container>
  );
};
