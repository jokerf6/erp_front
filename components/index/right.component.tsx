import React from "react";

import Image from "next/image";
import Footer from "@/components/default/footer.component";

export default function Right(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="p-2 lg:p-0 flex flex-col flex-1 justify-center items-center">
      <Image
        src="/images/logo.png"
        alt="ERP-Logo"
        className="self-stretch pb-4 lg:p-4 box-content w-[60px] md:w-[100px]"
        width={60}
        height={60}
      />
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-col gap-5 w-full max-w-[500px] lg:w-4/5 lg:max-w-full">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
