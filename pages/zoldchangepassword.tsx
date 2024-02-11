import { Inter } from "next/font/google";
import MainBox from "../components/login/old/mainBox.component";
import Left from "@/components/login/old/left.component";

const inter = Inter({ subsets: ["latin"] });

export default function Change() {
  return (
    <main className={`flex  min-h-screen flex-row ${inter.className} `}>
      <Left />
      <MainBox pages={1} />
    </main>
  );
}
