import Navbar from "./navbar";
import Footer from "./footer";
import React from "react";
import Head from "next/head";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Prooly</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
