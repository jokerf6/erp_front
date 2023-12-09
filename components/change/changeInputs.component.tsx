import React from "react";

export default function ChangeInputs() {
  return (
    <div className=" w-full flex flex-col gap-5">
      <div className=" flex gap-2 flex-col">
        <span className=" text-white">Current password</span>
        <input
          className="bg-transparent w-full rounded-md  text-white placeholder-input focus:outline-none p-2 px-4"
          style={{ border: "1px solid #FFFFFF" }}
          placeholder={"Enter current password"}
        />
      </div>
      <div className=" flex gap-2 flex-col">
        <span className=" text-white">New password</span>
        <input
          className="bg-transparent w-full rounded-md  text-white placeholder-input focus:outline-none p-2 px-4"
          style={{ border: "1px solid #FFFFFF" }}
          placeholder={"Enter your new password"}
        />
      </div>
      <div className=" flex gap-2 flex-col">
        <span className=" text-white">Confirm new password</span>
        <input
          className="bg-transparent w-full rounded-md  text-white placeholder-input focus:outline-none p-2 px-4"
          style={{ border: "1px solid #FFFFFF" }}
          placeholder={"Re-enter your new password"}
        />
      </div>

      <button className=" w-full bg-primary  bg-white2 font-b py-2 rounded-md text-dark font-bold cursor-pointer hover:shadow-lg">
        Save Changes
      </button>
    </div>
  );
}
