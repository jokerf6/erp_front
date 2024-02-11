import React, { useState } from "react";
import Welcome from "../login/boxLogin/welcome.component";
import LoginInputs from "../login/boxLogin/loginInputs.component";
import ChangeInputs from "../../change/zoldchangeInputs.component";
import WelcomeChange from "../../change/welcome.component";
export default function Login(props: { id: string; setId: any }) {
  const { id, setId } = props;
  return (
    <>
      {id === "-1" ? <Welcome /> : <WelcomeChange />}
      {id === "-1" ? (
        <LoginInputs id={id} setId={setId} />
      ) : (
        <ChangeInputs id={id} />
      )}
    </>
  );
}
