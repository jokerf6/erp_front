import React from "react";

// Components
import HeaderMain2 from "@/components/default/headerMain2.component";
import Taps from "@/components/default/taps.component";

// Layout 
import HomeLayout from "./home";

import { useRouter } from "next/router";


export default function PMLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = router.pathname.split("/");
  const pmCurrentTab = path[path.length - 1]
  
  return (
    <HomeLayout>
        <HeaderMain2 />
        <Taps pmCurrentTab={pmCurrentTab}/>
      <div>{children}</div>
    </HomeLayout>
  );
}
