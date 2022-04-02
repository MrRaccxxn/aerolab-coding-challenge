import { useState } from "react";
import { useSelector } from "react-redux";
import AerolabIcon from "../../../../../public/icons/aeropay-1.svg";
import Chevron from "../../../../../public/icons/chevron-active.svg";
import { theme } from "../../../../../styles";
import addDecimalPoints from "../../../../../utils/AddDecimalPoints.util";
import { Spinner } from "../../../../components/Spinner";
import { Text } from "../../../../components/Text";
import { IUser } from "../../../../interfaces/user.interface";
import { LoaderState } from "../../../../redux/reducers/loader/loader.reducer";
import { UserState } from "../../../../redux/reducers/user/user.reducer";
import { RootState } from "../../../../redux/store";
import { BalanceCard } from "../BalanceCard";
import { Container, DropButton } from "./AeroDropDown.styled";

export const AeroDropDown = (props: IUser) => {
  const [balanceCard, setBalanceCard] = useState<boolean>(false);
  const showBalanceCard = () => {
    setBalanceCard(!balanceCard);
  };

  const requestState = useSelector<RootState, LoaderState>(
    (state) => state.LoaderReducer
  );

  return (
    <Container>
      <DropButton onClick={() => showBalanceCard()}>
        {requestState.inProgress ? (
          <Spinner />
        ) : (
          <>
            <AerolabIcon className="icon" />
            <Text color={theme.colors.brand.default}>
              {addDecimalPoints(props.user.points)}
            </Text>
            <Chevron className="icon" transform="rotate(90)" />
          </>
        )}
      </DropButton>
      {balanceCard && !requestState.inProgress ? (
        <BalanceCard user={props.user} />
      ) : (
        <></>
      )}
    </Container>
  );
};
