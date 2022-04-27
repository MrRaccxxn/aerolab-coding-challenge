import "../styles/normalize.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Context from "../src/context/context";
import { theme } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
