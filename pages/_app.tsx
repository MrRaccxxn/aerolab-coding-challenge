import "../styles/normalize.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <MoralisProvider
        appId={`${process.env.NEXT_PUBLIC_MORALIS_APP_ID}`}
        serverUrl={`${process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}`}
      >
        <NotificationProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </NotificationProvider>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
