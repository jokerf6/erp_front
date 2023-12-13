import React from "react";

export default function Left() {
  return (
    <div
      className=" xl:flex lg:flex hidden  xl:p-10 lg:p-10 p-0"
      style={{ width: "50vw", height: "100vh" }}
    >
      <img
        src="/images/loginPage.png"
        className=" absolute top-0 left-0"
        style={{ width: "50vw", height: "100vh" }}
      />

      <div
        className=" absolute top-0 left-0 bg-black bg-opacity-10"
        style={{ width: "50vw", height: "100vh" }}
      ></div>
      <h1
        style={{ width: "50vw" }}
        className="absolute bottom-32 text-white2 font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
      >
        Manage Your Business Perfectly!
      </h1>
    </div>
  );
}
