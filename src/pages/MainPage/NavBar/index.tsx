import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../../styles";
import { Spinner } from "../../../components/Spinner";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { fetchUser } from "../../../redux/actions/user/user.actions";
import { LoaderState } from "../../../redux/reducers/loader/loader.reducer";
import { UserState } from "../../../redux/reducers/user/user.reducer";
import { RootState } from "../../../redux/store";
import { AeroDropDown } from "./AeroDropDown";

const FixedContainer = styled.div`
  left: 0;
  width: 100vw;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.deviceSize.medium}px) {
    height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    height: 70px;
  }
`;

const Container = styled.div`
  padding: 0 80px;
  width: 100vw;
  max-width: 1464px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 0 30px;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.mobile}px) {
    padding: 0 20px;
  }
`;

export const NavBar = () => {
  const user = useSelector<RootState, UserState["user"]>(
    (state) => state.UserReducer.user
  );

  const tabletDevice = useMediaQuery(theme.deviceSize.tablet.toString());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <FixedContainer>
      <Container>
        <Image
          src={
            tabletDevice
              ? "/icons/aerolab-logo-2.svg"
              : "/icons/aerolab-logo-1.svg"
          }
          width={tabletDevice ? 48 : 126}
          height={48}
          alt="hero image"
          objectFit="contain"
          objectPosition="bottom"
        />
        <AeroDropDown user={user} />
      </Container>
    </FixedContainer>
  );
};
