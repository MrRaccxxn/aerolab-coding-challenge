import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { WalkthroughSection } from "./WalkthroughSection";
import { ProductSection } from "../Product";
import { ToastWrapper } from "./ToastWrapper";

export const MainPage = () => {
  console.warn(
    "Seeing around? Don't forget to follow me on Linkedin to stay in touch! (: https://www.linkedin.com/in/ayrtonparedes/"
  );
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
