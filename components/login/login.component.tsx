import React, { useState, useContext } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Login } from "@/static/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import LoadingButton from "@/components/default/loadingButton.component";

// Functions
import { valid } from "@/functions/validations";

// Context
import { IndexContext } from "@/layouts";

export default function LoginForm() {
  const router = useRouter();
  const notify = async (error: string) => toast.error(error);

  const { setId, loading, setLoading } = useContext(IndexContext);

  return (
    <form className=" w-full flex flex-col gap-5" onSubmit={handle}>
      <div className=" flex gap-2 flex-col">
        <span className=" text-main">Email</span>
        <input
          name="email"
          className="bg-transparent w-full text-main rounded-md focus:outline-none p-2 px-4"
          style={{ border: "1px solid #251B37" }}
          placeholder={"Your Email"}
        />
      </div>
      <div className=" flex gap-2 flex-col">
        <span className=" text-main">Password</span>
        <input
          name="password"
          className="bg-transparent w-full rounded-md  text-main focus:outline-none p-2 px-4"
          style={{ border: "1px solid #251B37" }}
          placeholder={"Your Password"}
        />
      </div>
      <div className=" flex gap-2 items-center">
        <input
          type="checkbox"
          className=" bg-gray-400 text-red-500 rounded-2xl"
          style={{ width: "20px", height: "20px" }}
        />
        <span className=" text-main">Remember me</span>
      </div>
      {!loading ? (
        <button
          type="submit"
          className=" w-full bg-primary  bg-main font-b py-4 rounded-md text-white font-bold cursor-pointer hover:shadow-lg"
        >
          LOGIN
        </button>
      ) : (
        <LoadingButton />
      )}
      <div className=" w-full flex items-center justify-center">
        <Link
          href={"/forgetpassword"}
          className="cursor-pointer underline text-main2 mt-8 w-fit text-center"
        >
          Forget Password ?
        </Link>
      </div>
      <ToastContainer />
    </form>
  );

  async function handle(e: any) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    // validation for password and repassword
    const checkEmail = valid("Email", email);
    console.log(checkEmail);
    if (checkEmail !== "valid") {
      await notify(checkEmail);
      setLoading(false);
      return;
    }

    const data = {
      workEmail: email,
      password,
    };
    let requestJson = JSON.stringify(data);

    await fetch(Login, {
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
    console.log("a7as");
    setLoading(false);
    console.log(json.type);
    if (json.type == "Success") {
      console.log(json["data"]);
      if (json["data"]["user"]["first"]) setId(json["data"]["user"]["id"]);
      else {
        localStorage.setItem("user", json["data"]["user"]);
        router.push("/home");
      }
    } else {
      console.log(json["message"]);
      if (typeof json["message"] === "string") {
        notify(json["message"]);
      } else {
        for (let i = 0; i < json["message"].length; i++) {
          notify(json["message"][i]);
        }
      }
    }
  }
}
