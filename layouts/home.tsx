import React, { createContext, useState, useEffect, useRef } from "react";

// Components
import Header from "@/components/default/header.component";
import Footer from "@/components/default/footer.component";
import getWindowWidth from "@/functions/getWindowWidth";

// Context
const HomeContext = createContext({} as any);
export { HomeContext };

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { windowWidth, isSmallWindow } = getWindowWidth();

  return (
    <HomeContext.Provider
      value={{
        windowWidth,
        isSmallWindow,
      }}
    >
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 relative">{children}</div>
        <Footer />
      </main>
    </HomeContext.Provider>
  );
}
