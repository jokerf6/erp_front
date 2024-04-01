import Head from "next/head";

// Layout
import HomeLayout from "@/layouts/home";


export default function Meetings() {
  return (
    <>
      <Head>
        <title>ERP | Meetings</title>
      </Head>

      <div>meeting</div>
    </>
  );
}

Meetings.PageLayout = HomeLayout;
