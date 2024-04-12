import React from "react";

export default function EditItemNum({children}: any) {
  return (
    <p className="bg-sider-number-bg text-sider-number-text rounded-full flex justify-center items-center min-w-[25px] h-[25px] font-[500] px-2">
      {children}
    </p>
  );
}
