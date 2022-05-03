import { Body } from "./Body";
import { Footer } from "./Footer";
import { GitRepoLink } from "./GitRepoLink";
import { Header } from "./Header";

export const ProductSection = () => {
  return (
    <div id="productSection">
      <Header />
      <Body />
      <Footer />
      <GitRepoLink />
    </div>
  );
};
