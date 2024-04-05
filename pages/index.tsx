// Layout
import IndexLayout, { IndexContext } from "@/layouts";

// Components
import Welcome from "@/components/login/welcome.component";
import LoginForm from "@/components/login/login.component";

import Head from "next/head";
import { useContext } from "react";

export default function Index() {
  const { setEmail } = useContext(IndexContext);

  return (
    <>
      <Head>
        <title>ERP | Login</title>
      </Head>

      <Welcome />
      <LoginForm setEmail={setEmail} />
    </>
  );
}

Index.PageLayout = IndexLayout;
