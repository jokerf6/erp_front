import { FormatDate } from "@/utils/formatDate";
import React from "react";

export default function CreatedAt({children}: any) {
  return (
    <h3 className="text-primary-p">
      Created At {FormatDate(children, true)}
    </h3>
  );
}
