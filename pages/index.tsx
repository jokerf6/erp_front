// Layout
import IndexLayout from "@/layouts";

// Components
import Welcome from "@/components/login/welcome.component";
import LoginForm from "@/components/login/login.component";

import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>ERP | Login</title>
      </Head>

      <Welcome />
      <LoginForm />
    </>
  );
}

Index.PageLayout = IndexLayout;
