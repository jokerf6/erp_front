import Link from "next/link";
import React from "react";

export default function Taps() {
  return (
    <div className=" xl:flex lg:flex hidden  gap-6">
      <Link
        href={"/"}
        className=" text-orange text-xl cursor-pointer hover:text-orange"
      >
        About
      </Link>
      <Link
        href={"/experience"}
        className=" text-white text-xl cursor-pointer hover:text-orange"
      >
        Experience
      </Link>
      <Link
        href={"/projects"}
        className=" text-white text-xl cursor-pointer hover:text-orange"
      >
        Projects
      </Link>
      <Link
        href={"/contact"}
        className=" text-white text-xl cursor-pointer hover:text-orange"
      >
        Contact
      </Link>
    </div>
  );
}
