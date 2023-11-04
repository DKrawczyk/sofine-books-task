import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
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
