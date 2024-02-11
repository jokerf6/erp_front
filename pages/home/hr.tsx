import React from "react";

// Layout
import HomeLayout from "@/layouts/home";

import Head from "next/head";

export default function HR() {
  return (
    <>
      <Head>
        <title>ERP | HR</title>
      </Head>
      
      <div>HR - Page</div>
    </>
  );
}

HR.PageLayout = HomeLayout;
