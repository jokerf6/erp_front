import React, { useContext } from "react";

// Components
import WelcomeOTP from "@/components/verification/welcome.component";

// Context
import { IndexContext } from "@/layouts";
import VerifyEmailForm from "@/components/verification/verify.component";

// Layout
import IndexLayout from "@/layouts";

import Head from "next/head";

export default function VerifyEmail() {
  const { email } = useContext(IndexContext);
  return (
    <>
      <Head>
        <title>ERP | Verfiy Email</title>
      </Head>

      <WelcomeOTP email={email} />
      <VerifyEmailForm />
    </>
  );
}

VerifyEmail.PageLayout = IndexLayout;
