import React from "react";
import { Text } from "../Text";
import { CardContainer } from "./AeropayCard.styled";
import AerolabIcon from "../../../public/icons/aeropay-2.svg";
import WavesBackground from "../../../public/images/waves.svg";
import { theme } from "../../../styles";

export interface IAeropayCard {
  ownerName: string;
  expirationDate: string;
}

export const AeropayCard = (props: IAeropayCard) => (
  <CardContainer>
    <WavesBackground className="waves" />

    <div className="row">
      <Text color={theme.colors.neutral[0]}>AeroCard</Text>
      <div className="circleBox">
        <AerolabIcon />
      </div>
    </div>
    <div className="row">
      <Text color={theme.colors.neutral[0]}>{props.ownerName}</Text>
      <Text color={theme.colors.neutral[0]}>{props.expirationDate}</Text>
    </div>
  </CardContainer>
);
