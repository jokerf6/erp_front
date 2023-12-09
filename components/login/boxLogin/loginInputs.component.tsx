import Link from "next/link";
import React from "react";

export default function LoginInputs() {
  return (
    <div className=" w-full flex flex-col gap-5">
      <div className=" flex gap-2 flex-col">
        <span className=" text-white">Email</span>
        <input
          className="bg-transparent w-full rounded-md  text-white placeholder-input focus:outline-none p-2 px-4"
          style={{ border: "1px solid #FFFFFF" }}
          placeholder={"Your Email"}
        />
      </div>
      <div className=" flex gap-2 flex-col">
        <span className=" text-white">Password</span>
        <input
          className="bg-transparent w-full rounded-md  text-white placeholder-input focus:outline-none p-2 px-4"
          style={{ border: "1px solid #FFFFFF" }}
          placeholder={"Your Password"}
        />
      </div>
      <div className=" flex gap-2">
        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
        <span className=" text-white2">Remember me</span>
      </div>
      <button className=" w-full bg-primary  bg-white2 font-b py-2 rounded-md text-dark font-bold cursor-pointer hover:shadow-lg">
        LOGIN
      </button>
      <Link
        href={"/changepassword"}
        className="cursor-pointer underline text-main2 mt-8 w-full text-center"
      >
        Change Password
      </Link>
    </div>
  );
}
