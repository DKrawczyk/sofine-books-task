import Head from "next/head";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import "../styles/reset.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { theme } from "@/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Books app</title>
      </Head>
      <MantineProvider withCssVariables theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <Notifications position="top-right" />
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
};

export default App;
