import React from "react";

// Components
import PMHeader from "@/components/default/pmheader.component";
import PMTabs from "@/components/default/pmtabs.component";

// Layout 
import HomeLayout from "./home";

import { useRouter } from "next/router";


export default function PMLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = router.pathname.split("/");
  const pmCurrentTab = path[path.length - 1]

  const tabs = ["my tasks", "all projects", "archived projects"];
  
  return (
    <HomeLayout>
        <PMHeader tabs={tabs} pmCurrentTab={pmCurrentTab}/>
        <PMTabs tabs={tabs} pmCurrentTab={pmCurrentTab}/>
      <div>{children}</div>
    </HomeLayout>
  );
}
