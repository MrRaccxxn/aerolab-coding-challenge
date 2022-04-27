import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { WalkthroughSection } from "./WalkthroughSection";
import { ProductSection } from "../Product";

export const MainPage = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <WalkthroughSection />
      <ProductSection></ProductSection>
    </>
  );
};
