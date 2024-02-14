import React from "react";

// Layout
import PMLayout from "@/layouts/pm";

import Head from "next/head";

export default function AllProjects() {
  return (
    <>
      <Head>
        <title>ERP | All Projects</title>
      </Head>
      
      <div>allprojects</div>
    </>
  );
}

AllProjects.PageLayout = PMLayout;
