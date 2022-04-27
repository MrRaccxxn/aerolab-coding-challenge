import Image from "next/image";
import { Button } from "../Button";
import { Text } from "../Text";
import AerolabIcon from "../../../public/icons/aeropay-1.svg";
import {
  Container,
  HorizontalLine,
  ImageContainer,
  ImageSize,
  ProductContainer,
  TextContainer,
  TextDescription,
} from "./Product.styled";

export interface ProductProps {
  id: string;
  img: string;
  name: string;
  cost: string;
  category: string;
}

export const Product = (props: ProductProps) => {
  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <ImageSize>
            <Image
              src={props.img}
              width={300}
              height={300}
              objectFit="contain"
            />
          </ImageSize>
        </ImageContainer>
        <HorizontalLine />
        <TextDescription>
          <TextContainer>
            <Text>{props.name}</Text>
            <Text>{props.category}</Text>
          </TextContainer>
        </TextDescription>
      </ProductContainer>

      <Button>
        <Text color="white">Redeem for</Text>
        &nbsp;&nbsp;
        <AerolabIcon className="icon" />
        &nbsp;&nbsp;
        <Text color="white">{props.cost}</Text>
      </Button>
    </Container>
  );
};
