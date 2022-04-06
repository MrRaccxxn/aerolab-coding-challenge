import { useState } from "react";
import { Text } from "../Text";
import {
  Container,
  SelectableItem,
  SelectableList,
  TextContainer,
} from "./Dropdown.styled";

export const Dropdown = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const items = [
    { value: 1, label: "All Products" },
    { value: 2, label: "Gaming" },
    { value: 3, label: "Audio" },
    { value: 4, label: "Smart Home" },
  ];

  return (
    <Container>
      <TextContainer onClick={() => setVisible(!visible)}>
        <Text>Dropdown</Text>
        <span className="arrow">{visible ? "▶" : "▼"} </span>
      </TextContainer>

      {visible ? (
        <SelectableList>
          {items.map((item) => {
            return (
              <SelectableItem key={item.value}>
                <Text>{item.label}</Text>
              </SelectableItem>
            );
          })}
        </SelectableList>
      ) : (
        <></>
      )}
    </Container>
  );
};
