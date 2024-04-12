import React from "react";

export default function Title({ children }: any) {
  return (
    <h1 className="font-bold text-sider-title-text text-[1.5rem] capitalize">
      {children}
    </h1>
  );
}
