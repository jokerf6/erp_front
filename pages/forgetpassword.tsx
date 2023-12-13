import MainBox from "../components/login/mainBox.component";
import Left from "../components/login/left.component";
import React, { useState } from "react";
import WelcomeForget from "@/components/forget/welcome.component";
import ForgetInputs from "@/components/forget/forget.component";
import WelcomeOTP from "@/components/verification/welcome.component";
import VerificationInputs from "@/components/verification/inputs.component";
import WelcomeChange from "@/components/change/welcome.component";
import ChangeInputs from "@/components/change/changeInputs.component";
export default function Forget() {
  const [pages, setPages] = useState(0);
  const [change, setChange] = useState(false);

  const [id, setId] = useState("-1");
  const [email, setEmail] = useState("");

  return (
    <main className={`flex  min-h-screen flex-row`}>
      <Left />

      <div
        className=" xl:w-half lg:w-half w-full  flex xl:px-40 lg:px-30 px-10  items-center justify-center"
        style={{ height: "100vh" }}
      >
        {pages === 0 ? (
          <div className="  w-full flex flex-col gap-4">
            <img
              src="/images/logo.png"
              className={`absolute top-0 xl:left-1/2 lg:left-1/2 left-0 mt-5 ml-5`}
              style={{ width: "100px", height: "50px" }}
            />
            <WelcomeForget />
            <ForgetInputs
              setPages={setPages}
              setId={setId}
              setEmail={setEmail}
            />
          </div>
        ) : pages === 1 ? (
          <div className="  w-full flex flex-col gap-4">
            <img
              src="/images/logo.png"
              className={` absolute top-0 xl:left-1/2 lg:left-1/2 left-0 mt-5 ml-5`}
              style={{ width: "100px", height: "50px" }}
            />
            <WelcomeOTP email={email} />
            <VerificationInputs
              id={id}
              setChange={setChange}
              setPages={setPages}
            />
          </div>
        ) : (
          <div className="  w-full flex flex-col gap-4">
            <img
              src="/images/logo.png"
              className={` absolute top-0 xl:left-1/2 lg:left-1/2 left-0 mt-5 ml-5`}
              style={{ width: "100px", height: "50px" }}
            />
            <WelcomeChange />
            <ChangeInputs id={id} change={change} />
          </div>
        )}
      </div>
    </main>
  );
}
