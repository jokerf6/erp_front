import React from "react";
import WelcomeChange from "./welcome.component";
import ChangeInputs from "./changeInputs.component";

export default function Change(props: { id: string }) {
  const { id } = props;
  return (
    <>
      <WelcomeChange />
      <ChangeInputs id={id} />
    </>
  );
}
