import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import styled from "styled-components";
import { WalkthroughSection } from "./WalkthroughSection";
import { ProductSection } from "../Product";

export const MainPage = () => {
  const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <NavBar />
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <WalkthroughSection />
      <ProductSection></ProductSection>
    </>
  );
};
