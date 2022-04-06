import Image from "next/image";
import { Button } from "../Button";
import { Text } from "../Text";
import {
  Container,
  HorizontalLine,
  ImageContainer,
  ImageSize,
  ProductContainer,
  TextContainer,
  TextDescription,
} from "./Product.styled";

export const Product = () => {
  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <ImageSize>
            <Image
              src={"/illustrations/hero-desktop.png"}
              width={300}
              height={300}
            />
          </ImageSize>
        </ImageContainer>
        <HorizontalLine />
        <TextDescription>
          <TextContainer>
            <Text>Parrot AR</Text>
            <Text>drones</Text>
          </TextContainer>
        </TextDescription>
      </ProductContainer>

      <Button>
        <Text color="white">Redeem for 12.500</Text>
      </Button>
    </Container>
  );
};
