import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { AppPropsX } from "../types/next";
import  "../src/styles/global.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppPropsX) {
  const GivenLayout = Component.Layout;
  const DefaultLayout = ({ children }: { children: ReactNode }) => (
    <>{children}</>
  );
  const Layout = GivenLayout || DefaultLayout;
  const layoutProps = Component.LayoutProps || {};
  const router = useRouter();



  return (
    <>
      <Head> 
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <MantineProvider theme={{ loader: "oval" }}>
        <Notifications position="top-right" />
          <Layout {...layoutProps}>
            <Component {...pageProps} />
          </Layout> 
      </MantineProvider>
      
    </>
  );
}
