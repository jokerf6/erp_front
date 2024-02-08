import Image from "next/image";
import { Inter } from "next/font/google";
import MainBox from "../components/login/mainBox.component";
import Left from "@/components/login/left.component";
import Footer from "@/components/default/footer.component";
import { Icon } from "@iconify/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-[100dvh] ${inter.className}`}>
      <Left />
      <div className="p-2 lg:p-0 flex flex-col flex-1 justify-center items-center">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="self-stretch pb-4 lg:p-4 box-content w-[60px] md:w-[100px]"
        />
        <MainBox pages={0} />
        <Footer />
      </div>
    </main>
  );
}
