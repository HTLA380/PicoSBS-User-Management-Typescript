"use client";

import Head from "next/head";

import React, { useState } from "react";
import NavBar from "./navbar/NavBar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

interface MainLayoutInterface {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>ERPPOS</title>
        <meta name="description" content="ERPPOS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex min-h-screen font-medium bg-background text-foreground">
        <Sidebar isOpen={isOpen} toggleSidebar={handleSidebarToggle} />

        {/* sidebar overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-20 ${
            isOpen ? "visible" : "invisible"
          }`}
          onClick={handleSidebarToggle}></div>

        <div className="relative flex-1 w-full pb-5 overflow-auto md:pl-16">
          <NavBar toggleSidebar={handleSidebarToggle} />
          <div className="md:pl-8 px-4">
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
