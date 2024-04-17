"use client";
import Meeting from "@/components/meetings/MeetingNow/Meeting";
import MeetingStore from "@/store/meeting";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function page({ id }: any) {
  const param = usePathname();
  return (
    <>{param && <Meeting id={param && (param.split("/").pop() as string)} />}</>
  );
}
