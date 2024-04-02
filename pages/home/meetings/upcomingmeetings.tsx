import Head from "next/head";

// Layout
import HomeLayout from "@/layouts/home";

export default function UpcomingMeetings() {
  return (
    <>
      <Head>
        <title>ERP | Meetings</title>
      </Head>

      <div>meeting</div>
    </>
  );
}

UpcomingMeetings.PageLayout = HomeLayout;
