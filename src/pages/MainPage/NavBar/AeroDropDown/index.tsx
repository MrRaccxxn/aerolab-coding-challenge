import { useEffect, useRef, useState } from "react";
import { useMoralis } from "react-moralis";
import { useSelector } from "react-redux";
import { ConnectButton } from "web3uikit";
import AerolabIcon from "../../../../../public/icons/aeropay-1.svg";
import Chevron from "../../../../../public/icons/chevron-active.svg";
import { theme } from "../../../../../styles";
import addDecimalPoints from "../../../../../utils/AddDecimalPoints.util";
import { getNamedRequestState } from "../../../../../utils/getNamedRequestState.util";
import { Spinner } from "../../../../components/Spinner";
import { Text } from "../../../../components/Text";
import User from "../../../../components/User";
import { IUser } from "../../../../interfaces/user.interface";
import { LoaderState } from "../../../../redux/reducers/loader/loader.reducer";
import { RootState } from "../../../../redux/store";
import { RequestEnum } from "../../../../redux/types/request.enum";
import { BalanceCard } from "../BalanceCard";
import { ButtonContainer, Container, DropButton } from "./AeroDropDown.styled";

export const AeroDropDown = (props: IUser) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { Moralis, account } = useMoralis();
  let ref = useRef<HTMLDivElement>(null);
  let visibleButton = useRef<HTMLDivElement>(null);

  const requestState = useSelector<RootState, LoaderState>(
    (state) => state.LoaderReducer
  );

  const userState = getNamedRequestState(requestState, RequestEnum.getUser);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }

      if (
        visibleButton.current &&
        visibleButton.current.contains(event.target)
      ) {
        setVisible(!visible);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Container>
      <ButtonContainer>
        <ConnectButton />
        {account && <User account={account} />}
      </ButtonContainer>

      <div ref={ref} className={visible && !userState ? "block" : "hidden"}>
        <BalanceCard user={props.user} />
      </div>
    </Container>
  );
};
