import type { NextPage } from "next";
import Head from "next/head";
import { Provider } from "react-redux";
import { MainPage } from "../src/pages/MainPage";
import { store } from "../src/redux/store";
import Favicon from "../public/icons/favicon.svg";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Aerolab Tech Zone</title>
          <meta
            name="description"
            content="Aerolab Challenge by Ayrton Paredes"
          />
          <link rel="icon" type="image/svg+xml" href={Favicon} />
        </Head>

        <main>
          <MainPage />
        </main>
      </div>
    </Provider>
  );
};

export default Home;
