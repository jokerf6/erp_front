import React, { useContext } from "react";

// Components
import WelcomeOTP from "@/components/verification/welcome.component";

// Context
import { IndexContext } from "@/layouts";
import VerifyEmailForm from "@/components/verification/verify.component";

// Layout
import IndexLayout from "@/layouts";

export default function VerifyEmail() {
  const { email } = useContext(IndexContext);
  return (
    <>
      <WelcomeOTP email={email} />
      <VerifyEmailForm />
    </>
  );
}

VerifyEmail.PageLayout = IndexLayout
