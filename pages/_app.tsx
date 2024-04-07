import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<{ children: any }>;
  };
};
const queryClient = new QueryClient();

function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </QueryClientProvider>
    </>
  );
}
export default appWithTranslation(App);
