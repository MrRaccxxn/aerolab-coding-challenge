import Image from "next/image";
import { theme } from "../../../../../styles";
import { Text } from "../../../../components/Text";
import { BoxIcon, Container } from "./Pager.styled";

export const Pager = () => {
  return (
    <Container>
      <BoxIcon>
        <Image
          src={"/icons/chevron-default.svg"}
          width={18}
          height={18}
          className="iconLeft"
        />
      </BoxIcon>
      <Text>
        Page&nbsp;<Text gradientColor={theme.colors.brand.default}>1 of 2</Text>
      </Text>
      <BoxIcon>
        <Image src={"/icons/chevron-default.svg"} width={18} height={18} />
      </BoxIcon>
    </Container>
  );
};
