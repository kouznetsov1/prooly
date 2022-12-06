import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import React from "react";
import Head from "next/head";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Gainoteket</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
