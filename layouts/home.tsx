import React, { createContext, useState } from "react";

// Components
import Header from "@/components/default/header.component";
import Footer from "@/components/default/footer.component";
import Meeting from "@/components/meeting/Meeting";

// Functions
import getWindowWidth from "@/functions/getWindowWidth";

// Hooks
import useScrollBlockHook from "@/hooks/useScrollBlock";

// Context
const HomeContext = createContext({} as any);
export { HomeContext };

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { windowWidth, isSmallWindow } = getWindowWidth();
  const [showMeeting, setShowMeeting] = useState(false);
  useScrollBlockHook(showMeeting)

  return (
    <HomeContext.Provider
      value={{
        windowWidth,
        isSmallWindow,
        showMeeting,
        setShowMeeting,
      }}
    >
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 relative">{children}</div>
        <Footer />
      </main>
      {showMeeting && <Meeting />}
    </HomeContext.Provider>
  );
}
