import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { AppPropsX } from "../types/next";


export default function App({ Component, pageProps }: AppPropsX) {
  const GivenLayout = Component.Layout;
  const DefaultLayout = ({ children }: { children: ReactNode }) => (
    <>{children}</>
  );
  const Layout = GivenLayout || DefaultLayout;
  const layoutProps = Component.LayoutProps || {};
  const router = useRouter();

  return (

    <Layout {...layoutProps}>
        <Component {...pageProps} />
    </Layout>        
  )
}
