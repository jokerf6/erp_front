import "@/styles/globals.css";
// import 'react-day-picker/dist/style.css';
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext } from "react";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<{ children: any }>;
  };
};
const queryClient = new QueryClient();

function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      {/* <StoreProvider> */}
      <QueryClientProvider client={queryClient}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </QueryClientProvider>
      {/* </StoreProvider> */}
    </>
  );
}
export default appWithTranslation(App);
