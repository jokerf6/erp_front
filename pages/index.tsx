import Image from "next/image";
import { Inter } from "next/font/google";
import MainBox from "../components/login/mainBox.component";
import Left from "@/components/login/left.component";
import Footer from "@/components/default/footer.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex  min-h-screen flex-row ${inter.className}`}>
      <Left />
      <MainBox pages={0} />
    </main>
  );
}
