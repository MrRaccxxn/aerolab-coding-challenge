import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import Image from "next/image";
import { theme } from "../../../../styles";
import DownArrow from "../../../../public/icons/down-arrow.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {
  BannerContainer,
  ButtonContainer,
  Container,
  Content,
  HeroImageContainer,
  ImageContainer,
  TextContent,
} from "./Banner.styled";

export const Banner = () => {
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());

  return (
    <Container>
      <BannerContainer>
        <Content>
          <TextContent>
            <Text>EXPLORE THE</Text>
            <Text variant="h1" gradientColor={theme.colors.brand.default}>
              TECH
            </Text>
            <Text variant="h1" color={theme.colors.neutral[900]}>
              ZONE
            </Text>
            <Text>
              Here you’ll be able to exchange all of your hard-earned <br />
              Aeropoints and exchange them for cool tech.
            </Text>
          </TextContent>
          <ButtonContainer>
            <Button>
              <Text color={theme.colors.neutral[0]}>
                VIEW ALL PRODUCTS&nbsp;&nbsp;
                <DownArrow
                  width={24}
                  height={24}
                  fill={theme.colors.neutral[0]}
                />
              </Text>
            </Button>
          </ButtonContainer>
        </Content>

        <HeroImageContainer>
          <ImageContainer>
            <Image
              src={
                mediumDevice
                  ? "/illustrations/hero-responsive.png"
                  : "/illustrations/hero-desktop.png"
              }
              width={mediumDevice ? 480 : 722}
              height={mediumDevice ? 480 : 722}
              alt="hero image"
              objectFit="contain"
              objectPosition="bottom"
            />
          </ImageContainer>
        </HeroImageContainer>
      </BannerContainer>
    </Container>
  );
};
