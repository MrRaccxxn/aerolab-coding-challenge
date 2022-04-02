import React, { HTMLAttributes, ReactNode } from "react";
import { Text } from "../Text";
import {
  BottomCard,
  BoxIcon,
  IntroCard,
  IntroCardBackground,
  TitleAndIcon,
  TopCard,
} from "./WalkthroughCard.styled";

export interface IWalkthroughCard extends HTMLAttributes<HTMLDivElement> {
  image: ReactNode;
  icon: ReactNode;
  title: string;
  description: string;
  backgroundColor: string;
}

export const WalkthroughCard = (props: IWalkthroughCard) => {
  return (
    <IntroCardBackground>
      <IntroCard>
        <TopCard backgroundColor={props.backgroundColor}>{props.image}</TopCard>
        <BottomCard>
          <TitleAndIcon>
            <BoxIcon>{props.icon}</BoxIcon>
            <Text
              variant="h3"
              gradientColor="linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
            >
              {props.title}
            </Text>
          </TitleAndIcon>

          <Text>{props.description}</Text>
        </BottomCard>
      </IntroCard>
    </IntroCardBackground>
  );
};
