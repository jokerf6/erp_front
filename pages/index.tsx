
import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderMain from "@/components/home/header.component";
import Right from "@/components/home/main/right.component";
import Left from "@/components/home/main/left.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  min-h-screen flex-row ${inter.className} bg-main py-8  w-screen h-screen`}
    >
      <HeaderMain />
      <div className="  w-screen h-screen absolute top-0 left-0 flex items-center xl:justify-between lg:justify-between justify-center  xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse  xl:px-40 lg:px-30 px-10 xl:gap-0 lg:gap-0 md:gap-8 gap-6  ">
        <Left />
        <Right />
      </div>
    </main>
  );
}
