"use client";
import React, { useContext } from "react";

// Components
import WelcomeOTP from "@/components/verification/welcome.component";
import VerifyEmailForm from "@/components/verification/verify.component";

// Context
import { IndexContext } from "@/layouts";

// Layout
import IndexLayout from "@/layouts";

import Head from "next/head";

export default function VerifyEmail() {
  const email = localStorage.getItem("email");
  return (
    <>
      <Head>
        <title>ERP | Verfiy Email</title>
      </Head>
      {email && <WelcomeOTP email={email} />} <VerifyEmailForm />
    </>
  );
}

VerifyEmail.PageLayout = IndexLayout;
