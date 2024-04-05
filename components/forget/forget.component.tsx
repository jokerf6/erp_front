import React, { useState } from "react";

import { forget } from "@/static/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingButton from "@/components/default/loadingButton.component";

import { valid } from "@/functions/validations";
import { useRouter } from "next/router";

export default function ForgetForm(props: { setId: any; setEmail: any }) {
  const { setId, setEmail } = props;
  const notify = (error: string) => toast.error(error);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <form onSubmit={handle} className=" w-full flex flex-col gap-5">
      <div className=" flex gap-2 flex-col">
        <span className=" text-primary-purple">Email</span>
        <input
          name="email"
          className="bg-transparent w-full rounded-md text-primary-purple placeholder-input focus:outline-none p-2 px-4 border-[1px] border-primary-purple"
          placeholder={"Your Email"}
        />
      </div>
      {!loading ? (
        <button
          type="submit"
          className=" w-full bg-primary-purple font-b py-4 rounded-md mt-10 text-white font-bold cursor-pointer hover:shadow-lg"
        >
          Continue
        </button>
      ) : (
        <LoadingButton />
      )}
      <ToastContainer />
    </form>
  );
  async function handle(e: any) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button
    setLoading(true);
    const email = e.target.email.value;
    // validation for email
    const checkEmail = valid("Email", email);
    console.log(checkEmail);
    if (checkEmail !== "valid") {
      notify(checkEmail);
      setLoading(false);

      return;
    }
    const data = {
      email,
    };
    let requestJson = JSON.stringify(data);

    await fetch(forget, {
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
    if (json.type == "Success") {
      localStorage.setItem("token", json["data"]["token"]);
      localStorage.setItem("email", json["data"]["user"]["email"]);
      router.push("/verifyEmail");
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
