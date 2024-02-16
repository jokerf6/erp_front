import React, { createContext, useState, useEffect } from "react";

// Components
import Header from "@/components/default/header.component";
import Footer from "@/components/default/footer.component";
import useScrollBlock from "@/functions/useScrollBlock";

// Context
const HomeContext = createContext({} as any);
export { HomeContext };

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
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
    setIsSmallWindow(windowWidth < 1024 ? true : false);
  }, [windowWidth]);

  // Block/Allow Scrolling when Opening/Closing Menu
  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpen]);

  return (
    <HomeContext.Provider
      value={{
        windowWidth,
        isSmallWindow,
        allowScroll,
        blockScroll,
        isOpen,
        setIsOpen,
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
