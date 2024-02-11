// Layout
import IndexLayout from "@/layouts"

// Components
import WelcomeChange from "@/components/change/welcome.component"
import ChangePasswordForm from "@/components/change/change.component"

export default function ChangePassword() {
  return (
    <>
      <WelcomeChange />
      <ChangePasswordForm />
    </>
  )
}

ChangePassword.PageLayout = IndexLayout