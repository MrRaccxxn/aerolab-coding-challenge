import type { NextPage } from "next";
import Head from "next/head";
import { Provider } from "react-redux";
import { MainPage } from "../src/pages/MainPage";
import { store } from "../src/redux/store";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Aerolab Tech Zone</title>
          <meta
            name="Aerolab Challenge"
            content="Aerolab Challenge resolved by Ayrton Paredes"
          />
          <meta property="og:title" content="Aerolab Challenge" />
          <meta
            property="og:description"
            content="Aerolab Challenge resolved by Ayrton Paredes"
          />
          <meta property="og:type" content="website" />
          <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        </Head>

        <main>
          <MainPage />
        </main>
      </div>
    </Provider>
  );
};

export default Home;
