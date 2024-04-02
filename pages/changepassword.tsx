// Layout
import IndexLayout from "@/layouts"

// Components
import WelcomeChange from "@/components/change/welcome.component"
import ChangePasswordForm from "@/components/change/change.component"

import Head from "next/head"

export default function ChangePassword() {
  return (
    <>
      <Head>
        <title>ERP | Change Password</title>
      </Head>

      <WelcomeChange />
      <ChangePasswordForm />
    </>
  )
}

ChangePassword.PageLayout = IndexLayout