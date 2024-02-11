import React, { useContext } from "react";

import { User } from "@/static/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import LoadingButton from "@/components/default/loadingButton.component";

// Context
import { IndexContext } from "@/layouts";

export default function VerifyEmailForm() {
  const notify = (error: string) => toast.error(error);
  const { id, setChange, loading, setLoading } = useContext(IndexContext);

  return (
    <form
      onSubmit={handle}
      className=" w-full flex flex-col gap-5 xl:items-strt lg:items-start items-center mt-14"
    >
      <div className=" flex gap-2 flex-row ">
        <input
          type="text"
          name="input1"
          maxLength={1}
          autoFocus
          className=" bg-cgrey p-2  w-14 text-center h-14 rounded-md  text-main placeholder-input focus:outline-none"
          style={{ border: "1px solid #251B37" }}
          placeholder={"0"}
          onChange={(e) => {
            const field = e.target.value.length;
            if (field > 0) {
              document.getElementById("text2")?.focus();
            }
          }}
        />
        <input
          id="text2"
          type="text"
          name="input2"
          maxLength={1}
          className=" bg-cgrey p-2  w-14 text-center h-14 rounded-md  text-main placeholder-input focus:outline-none"
          style={{ border: "1px solid #251B37" }}
          placeholder={"0"}
          onChange={(e) => {
            const field = e.target.value.length;
            if (field > 0) {
              document.getElementById("text3")?.focus();
            }
          }}
        />
        <input
          type="text"
          id="text3"
          name="input3"
          maxLength={1}
          className=" bg-cgrey p-2  w-14 text-center h-14 rounded-md  text-main placeholder-input focus:outline-none"
          style={{ border: "1px solid #251B37" }}
          placeholder={"0"}
          onChange={(e) => {
            const field = e.target.value.length;
            if (field > 0) {
              document.getElementById("text4")?.focus();
            }
          }}
        />
        <input
          id="text4"
          name="input4"
          type="text"
          maxLength={1}
          className=" bg-cgrey p-2  w-14 text-center h-14 rounded-md  text-main placeholder-input focus:outline-none"
          style={{ border: "1px solid #251B37" }}
          placeholder={"0"}
          onChange={(e) => {
            const field = e.target.value.length;
            if (field > 0) {
              document.getElementById("text5")?.focus();
            }
          }}
        />
        <input
          id="text5"
          name="input5"
          type="text"
          maxLength={1}
          className=" bg-cgrey p-2  w-14 text-center h-14 rounded-md  text-main placeholder-input focus:outline-none"
          style={{ border: "1px solid #251B37" }}
          placeholder={"0"}
        />
      </div>
      {!loading ? (
        <button
          type="submit"
          className=" w-full bg-primary  bg-main font-b py-4 rounded-md text-white font-bold cursor-pointer hover:shadow-lg"
        >
          Verify
        </button>
      ) : (
        <LoadingButton />
      )}
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

    await fetch(User + `/${id}/verify_code`, {
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
      setChange(true);
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
