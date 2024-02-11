// Layout
import IndexLayout from "@/layouts";

// Components
import Welcome from "@/components/login/welcome.component";
import LoginForm from "@/components/login/login.component";

export default function Index() {
  return (
    <>
      <Welcome />
      <LoginForm />
    </>
  );
}

Index.PageLayout = IndexLayout;
