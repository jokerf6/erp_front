import React from "react";

// Layout
import HomeLayout from "@/layouts/home";

import Head from "next/head";

export default function ArchivedProjects() {
  return (
    <>
      <Head>
        <title>ERP | Archived Projects</title>
      </Head>

      <div>ArchivedProjects</div>
    </>
  );
}

ArchivedProjects.PageLayout = HomeLayout
