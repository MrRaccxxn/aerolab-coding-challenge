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
import { Spinner } from "../Spinner";

export interface ProductProps {
  id: string;
  img: string;
  name: string;
  cost: string;
  category: string;
  isLoading: boolean;
  isDisabled: boolean;
  onClick: (params: any) => any;
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

      <Button onClick={props.onClick} disabled={props.isDisabled}>
        {props.isLoading ? (
          <Text color="white">Processing...</Text>
        ) : props.isDisabled ? (
          <>
            <Text>You need</Text>
            &nbsp;&nbsp;
            <AerolabIcon className="icon" />
            &nbsp;&nbsp;
            <Text>{props.cost}</Text>
          </>
        ) : (
          <>
            <Text color="white">Redeem for</Text>
            &nbsp;&nbsp;
            <AerolabIcon className="icon" />
            &nbsp;&nbsp;
            <Text color="white">{props.cost}</Text>
          </>
        )}
      </Button>
    </Container>
  );
};
