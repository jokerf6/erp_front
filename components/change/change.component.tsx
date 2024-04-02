"use client";
import React, { useContext } from "react";

import { User } from "@/static/links";

import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingButton from "@/components/default/loadingButton.component";

import { valid } from "@/functions/validations";

// Context
import { IndexContext } from "@/layouts";

export default function ChangePasswordForm() {
  const { id, change, loading, setLoading } = useContext(IndexContext);
  const router = useRouter();
  const notify = (error: string) => toast.error(error);

  return (
    <form className=" w-full flex flex-col gap-5" onSubmit={handle}>
      <div className=" flex gap-2 flex-col">
        <span className=" text-primary-purple">New password</span>
        <input
          name="change_password"
          className="bg-transparent w-full rounded-md  text-primary-purple placeholder-input focus:outline-none p-2 px-4 border-[1px] border-primary-purple"
          placeholder={"Enter your new password"}
        />
      </div>
      <div className=" flex gap-2 flex-col">
        <span className=" text-primary-purple">Confirm new password</span>
        <input
          name="re_change_password"
          className="bg-transparent w-full rounded-md  text-primary-purple placeholder-input focus:outline-none p-2 px-4 border-[1px] border-primary-purple"
          placeholder={"Re-enter your new password"}
        />
      </div>

      {!loading ? (
        <button
          type="submit"
          className=" w-full bg-primary-purple font-b py-4 rounded-md mt-10 text-white font-bold cursor-pointer hover:shadow-lg"
        >
          Save Changes
        </button>
      ) : (
        <LoadingButton />
      )}
      <ToastContainer />
    </form>
  );

  async function handle(e: any) {
    console.log("hi");
    console.log(change);
    e.preventDefault(); // to prevent page from refreshing after click on submit button
    setLoading(true);
    // get data from form
    const password = e.target.change_password.value;
    const repassword = e.target.re_change_password.value;
    // validation for password and repassword
    const checkPassword = valid("Password", password);
    const checkRePassword = valid("Password", repassword);
    if (checkPassword !== "valid") {
      notify(checkPassword);
      setLoading(false);

      return;
    }
    if (checkRePassword !== "valid") {
      notify(checkRePassword);
      setLoading(false);

      return;
    }
    // check password matches
    if (password !== repassword) {
      notify("passwords not match");
      setLoading(false);

      return;
    }
    if (!change && change !== undefined) {
      notify("Cannot change your password");
      setLoading(false);

      return;
    }
    console.log("conti");
    const data = {
      password,
    };
    let requestJson = JSON.stringify(data);

    await fetch(User + `/${id}/change_password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => onGetResponse(json));
  }
  async function onGetResponse(json: any) {
    setLoading(false);
    if ((json.type = "Success")) {
      if (json["data"]) {
        localStorage.setItem("user", json["data"]["user"]);
        router.push("/home");
      } else {
        router.replace("/");
      }
    } else {
      show_error(json);
    }
  }
  function show_error(json: any) {
    if (typeof json["message"] === "string") {
      notify(json["message"]);
    } else {
      for (let i = 0; i < json["message"].length; i++) {
        notify(json["message"][i]);
      }
    }
  }
}
