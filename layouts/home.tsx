import React, { createContext, useState } from "react";

import { useRouter } from "next/router";

// Components
import Header from "@/components/default/header.component";
import Footer from "@/components/default/footer.component";
import Meeting from "@/components/meeting/Meeting";
import MinimizedMeeting from "@/components/meeting/MinimizedMeeting";
import ScheduleMeetingSider from "@/components/meetings/ScheduleMeeting Sider/ScheduleMeetingSider.component";
import TopRightButtons from "@/components/meetings/TopRightButtons/TopRightButtons";

// Functions
import getWindowWidth from "@/functions/getWindowWidth";

// Hooks
import useScrollBlockHook from "@/hooks/useScrollBlock";
import PageHeader from "@/components/default/PageHeader";

// Context
const HomeContext = createContext({} as any);
export { HomeContext };

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { windowWidth, isSmallWindow } = getWindowWidth();

  const router = useRouter();
  const path = router.pathname.split("/");
  const currentPage = path[path.length - 2];
  const currentTab = path[path.length - 1];
  let currentTabs = [""];
  if (currentPage === "pm")
    currentTabs = ["tasks", "all projects", "archived projects"];
  else if (currentPage === "meetings")
    currentTabs = ["upcoming meetings", "history"];

  const [showMeeting, setShowMeeting] = useState(false);
  useScrollBlockHook(showMeeting);
  const [minimizeMeeting, setMinimizeMeeting] = useState(false);
  const [scheduleOverlay, setScheduleOverlay] = React.useState(false);
  useScrollBlockHook(scheduleOverlay);

  return (
    <HomeContext.Provider
      value={{
        windowWidth,
        isSmallWindow,
        showMeeting,
        setShowMeeting,
        minimizeMeeting,
        setMinimizeMeeting,
      }}
    >
      <main className="flex flex-col min-h-screen">
        <Header />

        {currentPage !== "home" && (
          <PageHeader
            currentPage={currentPage}
            currentTab={currentTab}
            currentTabs={currentTabs}
          />
        )}

        {currentPage === "meetings" && (
          <TopRightButtons setScheduleOverlay={setScheduleOverlay} />
        )}

        <div className="flex-1 relative">{children}</div>
        <Footer />
      </main>
      {showMeeting && <Meeting />}
      {minimizeMeeting && <MinimizedMeeting />}
      {scheduleOverlay && (
        <ScheduleMeetingSider setScheduleOverlay={setScheduleOverlay} />
      )}
    </HomeContext.Provider>
  );
}
