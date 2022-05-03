import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { WalkthroughSection } from "./WalkthroughSection";
import { ProductSection } from "../Product";
import { ToastWrapper } from "./ToastWrapper";

export const MainPage = () => {
  return (
    <>
      <ToastWrapper />
      <NavBar />
      <Banner />
      <WalkthroughSection />
      <ProductSection></ProductSection>
    </>
  );
};
