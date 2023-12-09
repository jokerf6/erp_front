import React from "react";

export default function Left() {
  return (
    <div className=" p-10" style={{ width: "50vw", height: "100vh" }}>
      <img
        src="/images/loginPage.jpg"
        className=" absolute top-0 left-0"
        style={{ width: "50vw", height: "100vh" }}
      />
      <h1
        style={{ width: "50vw" }}
        className="absolute bottom-32 text-white2 font-bold text-7xl"
      >
        Manage Your Business Perfectly!
      </h1>
    </div>
  );
}
