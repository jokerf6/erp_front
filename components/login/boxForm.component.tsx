import React from "react";
import Welcome from "./boxLogin/welcome.component";
import LoginInputs from "./boxLogin/loginInputs.component";
import ChangeInputs from "../change/changeInputs.component";
import WelcomeForget from "../change/welcome.component";
export default function BoxForm(props: { change: boolean }) {
  const { change } = props;
  return (
    <div className="  w-full flex flex-col gap-4">
      <img src="/images/logo.png" style={{ width: "110px", height: "70px" }} />

      {!change ? <Welcome /> : <WelcomeForget />}

      {!change ? <LoginInputs /> : <ChangeInputs />}

      <span
        className="  absolute bottom-10 text-center text-white2"
        style={{ width: "50vw", left: "50%" }}
      >
        Copyright © 2023. All rights reserved.
      </span>
    </div>
  );
}
