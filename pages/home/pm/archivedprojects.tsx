import React from "react";

// Layout
import PMLayout from "@/layouts/pm";

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

ArchivedProjects.PageLayout = PMLayout
