import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div>
      <h1 onClick={() => router.replace("/")}>KJKJKJ</h1>
      <h1 className="  xl:text-6xl md:text-xs">gekk</h1>
    </div>
  );
}
