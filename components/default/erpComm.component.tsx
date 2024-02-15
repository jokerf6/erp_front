import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function ErpComm() {
  const [erpCom, setErpCom] = useState("erp");

  const btnStyles =
    "flex items-center justify-center gap-2 text-xl lg:text-sm flex-1 rounded-xl px-4 py-1 lg:py-[1px] outline outline-1 outline-white/[0.2]";

  const iconStyles = "text-2xl lg:text-xl";

  return (
    <div className=" flex text-white py-2 px-[1px] lg:py-1 lg:px-1 gap-2 rounded-3xl items-center lg:bg-main3">
      <button
        onClick={() => setErpCom("erp")}
        className={`${btnStyles} ${erpCom === "erp" && "bg-light"}`}
      >
        <Icon icon={"icon-park-outline:system"} className={iconStyles} />
        ERP
      </button>
      <button
        onClick={() => setErpCom("community")}
        className={`${btnStyles} ${erpCom === "community" && "bg-light"}`}
      >
        <Icon
          icon={"fluent:people-community-48-regular"}
          className={iconStyles}
        />
        Community
      </button>
    </div>
  );
}
