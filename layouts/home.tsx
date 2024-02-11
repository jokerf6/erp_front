import React from "react";

// Components
import NavBar from "@/components/default/navbar.component";
import Footer from "@/components/default/footer.component";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
