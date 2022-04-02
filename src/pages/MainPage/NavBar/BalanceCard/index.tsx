import {
  Container,
  Hr,
  PointsContainer,
  SelectorSection,
} from "./BalanceCard.styled";
import { Text } from "../../../../components/Text";
import { AeropayCard } from "../../../../components/AeropayCard";
import { Button } from "../../../../components/Button";
import AerolabIcon from "../../../../../public/icons/aeropay-1.svg";
import { theme } from "../../../../../styles";
import { Selector } from "../../../../components/Selector";
import transformToCreationDate from "../../../../../utils/CreationDate.util";
import { useState } from "react";
import { IUser } from "../../../../interfaces/user.interface";
import { addPointsToUser } from "../../../../redux/actions/user/user.actions";
import { useDispatch } from "react-redux";

export const BalanceCard = (props: IUser) => {
  const amounts = [1000, 5000, 7500];
  const [amount, setAmount] = useState(amounts[1]);

  const dispatch = useDispatch();

  function onAddPoints(amount: number) {
    dispatch(addPointsToUser(amount));
  }

  return (
    <Container>
      <Text>Add Balance</Text>
      <Hr />
      <PointsContainer>
        <AeropayCard
          ownerName={props.user.name}
          expirationDate={transformToCreationDate(props.user.createDate)}
        ></AeropayCard>
        <SelectorSection>
          {amounts.map((amountItem) => {
            return (
              <Selector
                variant="number"
                key={amountItem}
                isSelected={amountItem == amount}
                onClick={() => {
                  setAmount(amountItem);
                }}
              >
                <Text
                  color={
                    amountItem == amount ? theme.colors.neutral[0] : "#8577F4"
                  }
                >
                  {amountItem}
                </Text>
              </Selector>
            );
          })}
        </SelectorSection>
        <Button className="addPoints" onClick={() => onAddPoints(amount)}>
          <AerolabIcon className="icon" />
          &nbsp;&nbsp;
          <Text color={theme.colors.neutral[0]}>Add Points</Text>
        </Button>
      </PointsContainer>
    </Container>
  );
};
