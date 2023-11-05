import Head from "next/head";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import "../styles/reset.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "@/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Books app</title>
      </Head>
      <MantineProvider withCssVariables theme={theme}>
        <Notifications position="top-right" />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;
