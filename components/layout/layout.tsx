import React from "react";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import { NavBar, Footer } from "../navigation/navbar";

export const siteTitle = "Infección Post-parto";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="ITESM.svg" alt-text="" />
      </Head>

      {<></>}

      <div className={s.contContainer}>
        <div className={s.container}>
          <main>
            {children} <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
