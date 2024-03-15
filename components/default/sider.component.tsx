import React from "react";

export default function Sider(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-sider-bg-white absolute top-0 right-0 min-h-screen w-screen max-w-[600px] z-[21] flex flex-col cursor-default"
    >
      {children}
    </div>
  );
}
