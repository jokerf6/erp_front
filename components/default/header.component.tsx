import React from "react";
import { useTranslation } from "next-i18next";
export default function Header() {
  const { t } = useTranslation();
  return (
    <div className=" w-full flex justify-between items-center bg-white shadow-sm pb-2 px-10 pt-2">
      <span className=" text-primary font-bold text-3xl">LOGO</span>
    </div>
  );
}
