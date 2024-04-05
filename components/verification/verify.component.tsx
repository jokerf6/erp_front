import React, { useContext } from "react";

import { User } from "@/static/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import LoadingButton from "@/components/default/loadingButton.component";

// Context
import { IndexContext } from "@/layouts";
import { useRouter } from "next/router";

export default function VerifyEmailForm() {
  const notify = (error: string) => toast.error(error);
  const { id, setChange, loading, setLoading } = useContext(IndexContext);

  const router = useRouter();
  const codeInputs = new Array(5).fill("").map((digit, index) => {
    return (
      <input
        key={index}
        type="text"
        name={`input${index + 1}`}
        id={`input${index + 1}`}
        maxLength={1}
        className="bg-lite-white w-12 h-12 md:w-14 md:h-14 text-center  rounded-md  text-primary-purple placeholder-input focus:outline-none border-[1px] border-primary-purple"
        placeholder={"0"}
        onChange={(e) => {
          const field = e.target.value.length;
          if (field > 0) {
            document.getElementById(`input${index + 2}`)?.focus();
          }
        }}
      />
    );
  });

  return (
    <form
      onSubmit={handle}
      className="w-fit flex flex-col gap-14 mx-auto items-center mt-14"
    >
      <div className="flex gap-2 ">{codeInputs}</div>
      {!loading ? (
        <>
          <button
            type="submit"
            className=" w-full bg-primary  bg-main font-b py-4 rounded-md text-white font-bold cursor-pointer hover:shadow-lg"
          >
            Verify
          </button>
        </>
      ) : (
        <LoadingButton />
      )}
      <div className=" text-center mt-[-50px] w-full text-[14px] font-[400]">
        Didn’t receive the email?
        <span
          onClick={async () => resend()}
          className=" font-[600] ml-[5px] hover:cursor-pointer hover:underline"
        >
          Click to resend
        </span>
      </div>
      <ToastContainer />
    </form>
  );
  async function handle(e: any) {
    setLoading(true);
    e.preventDefault(); // to prevent page from refreshing after click on submit button
    const data = {
      code:
        e.target.input1.value +
        e.target.input2.value +
        e.target.input3.value +
        e.target.input4.value +
        e.target.input5.value,
    };
    let requestJson = JSON.stringify(data);

    await fetch(User + `/verify_code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the authorization header
      },

      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => onGetResponse(json));
  }
  async function onGetResponse(json: any) {
    setLoading(false);
    if (json.type == "Success") {
      localStorage.removeItem("token");
      console.log(json["data"]);
      localStorage.setItem("token", json["data"]["token"]);
      router.push("/changePassword");
    } else {
      console.log(json);
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

  async function resend() {
    await fetch(User + `/resend_otp`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the authorization header
      },
    })
      .then((response) => response.json())
      .then((json) => onGetResponse2(json));
  }
  async function onGetResponse2(json: any) {
    if (json.type !== "Success") {
      show_error(json);
    }
  }
}
