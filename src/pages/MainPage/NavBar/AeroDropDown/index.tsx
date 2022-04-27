import { useState } from "react";
import { useSelector } from "react-redux";
import AerolabIcon from "../../../../../public/icons/aeropay-1.svg";
import Chevron from "../../../../../public/icons/chevron-active.svg";
import { theme } from "../../../../../styles";
import addDecimalPoints from "../../../../../utils/AddDecimalPoints.util";
import { getNamedRequestState } from "../../../../../utils/getNamedRequestState.util";
import { Spinner } from "../../../../components/Spinner";
import { Text } from "../../../../components/Text";
import { IUser } from "../../../../interfaces/user.interface";
import { IRequest } from "../../../../redux/actions/loader/loader.types";
import { LoaderState } from "../../../../redux/reducers/loader/loader.reducer";
import { RootState } from "../../../../redux/store";
import { RequestEnum } from "../../../../redux/types/request.enum";
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

  const userState = getNamedRequestState(requestState, RequestEnum.getUser);

  return (
    <Container>
      <DropButton onClick={() => showBalanceCard()}>
        {userState ? (
          <Spinner />
        ) : (
          <>
            <AerolabIcon className="icon" />
            <Text color={theme.colors.brand.default}>
              {props.user.points != undefined
                ? addDecimalPoints(props.user.points)
                : ""}
            </Text>
            <Chevron className="icon" transform="rotate(90)" />
          </>
        )}
      </DropButton>
      {balanceCard && !userState ? <BalanceCard user={props.user} /> : <></>}
    </Container>
  );
};
