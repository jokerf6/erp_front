import { forget } from "@/static/links";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@/components/default/loadingButton.component";
import { valid } from "@/functions/validations";

export default function ForgetInputs(props: {
  setPages: any;
  setId: any;
  setEmail: any;
}) {
  const { setId, setPages, setEmail } = props;
  const notify = (error: string) => toast.error(error);
  const [loading, setLoading] = useState(false);
  return (
    <form onSubmit={handel} className=" w-full flex flex-col gap-5">
      <div className=" flex gap-2 flex-col">
        <span className=" text-main">Email</span>
        <input
          name="email"
          className="bg-transparent w-full rounded-md  text-main placeholder-input focus:outline-none p-2 px-4"
          style={{ border: "1px solid #251B37" }}
          placeholder={"Your Email"}
        />
      </div>
      {!loading ? (
        <button
          type="submit"
          className=" w-full bg-primary  bg-main font-b py-4 rounded-md mt-10 text-white font-bold cursor-pointer hover:shadow-lg"
        >
          Continue
        </button>
      ) : (
        <LoadingButton />
      )}
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button
    setLoading(true);
    const email = e.target.email.value;
    // validation for email
    const checkEmail = valid("Email", email);
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
      setId(json["data"]["user"]["id"]);
      setEmail(json["data"]["user"]["email"]);
      setPages(1);
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
