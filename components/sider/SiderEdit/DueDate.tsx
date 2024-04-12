import { FormatDate } from "@/utils/formatDate";
import React from "react";

export default function DueDate({ children }: any) {
  return (
    <h2 className="text-primary-pink font-bold">
      Due Date {FormatDate(children, false)}
    </h2>
  );
}
