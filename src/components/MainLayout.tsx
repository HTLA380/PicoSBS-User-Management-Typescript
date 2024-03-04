import Head from "next/head";

import React from "react";
import NavBar from "./navbar/NavBar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

interface MainLayoutInterface {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ERPPOS</title>
        <meta name="description" content="ERPPOS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex min-h-screen font-medium bg-background text-foreground">
        <Sidebar />
        <div className="relative flex-1 w-full pb-5 overflow-auto pl-16">
          <NavBar />
          <div className="flex flex-col justify-between h-[90%] px-4">
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
