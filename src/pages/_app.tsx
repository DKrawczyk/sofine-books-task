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
        <Notifications
          w={300}
          style={{
            position: "absolute",
            top: "30px",
            right: "40px",
            display: "inline",
          }}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;
