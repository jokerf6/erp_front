import React, { useContext } from "react";

// Layout
import IndexLayout from "@/layouts";

// Components
import WelcomeForget from "@/components/forget/welcome.component";
import ForgetForm from "@/components/forget/forget.component";

// Context
import { IndexContext } from "@/layouts";

import Head from "next/head";

export default function ForgetPassword() {
  const { setId, setEmail } = useContext(IndexContext);
  return (
    <>
      <Head>
        <title>ERP | Forgot Password</title>
      </Head>

      <WelcomeForget />
      <ForgetForm setId={setId} setEmail={setEmail} />
    </>
  );
}

ForgetPassword.PageLayout = IndexLayout;
