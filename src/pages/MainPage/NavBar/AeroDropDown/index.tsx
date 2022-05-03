import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AerolabIcon from "../../../../../public/icons/aeropay-1.svg";
import Chevron from "../../../../../public/icons/chevron-active.svg";
import { theme } from "../../../../../styles";
import addDecimalPoints from "../../../../../utils/AddDecimalPoints.util";
import { getNamedRequestState } from "../../../../../utils/getNamedRequestState.util";
import { Spinner } from "../../../../components/Spinner";
import { Text } from "../../../../components/Text";
import { IUser } from "../../../../interfaces/user.interface";
import { LoaderState } from "../../../../redux/reducers/loader/loader.reducer";
import { RootState } from "../../../../redux/store";
import { RequestEnum } from "../../../../redux/types/request.enum";
import { BalanceCard } from "../BalanceCard";
import { Container, DropButton } from "./AeroDropDown.styled";

export const AeroDropDown = (props: IUser) => {
  const [visible, setVisible] = useState<boolean>(false);
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
      <DropButton ref={visibleButton}>
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
      <div ref={ref} className={visible && !userState ? "block" : "hidden"}>
        <BalanceCard user={props.user} />
      </div>
    </Container>
  );
};
