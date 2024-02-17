import React, { createContext, useState, useEffect, useRef } from "react";

// Components
import Header from "@/components/default/header.component";
import Footer from "@/components/default/footer.component";

// Context
const HomeContext = createContext({} as any);
export { HomeContext };

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWidth] = useState(Number);
  const [isSmallWindow, setIsSmallWindow] = useState(Boolean);

  // Update windowWidth
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function windowTrackerWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", windowTrackerWidth);

    return function () {
      window.removeEventListener("resize", windowTrackerWidth);
    };
  }, [windowWidth]);

  // Update isSmallWindow
  useEffect(() => {
    setIsSmallWindow(window.innerWidth < 1024 ? true : false);
  }, [windowWidth]);

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
