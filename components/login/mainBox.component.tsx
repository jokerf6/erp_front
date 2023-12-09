import React from "react";
import BoxForm from "./boxForm.component";

export default function Right(props: { change: boolean }) {
  const { change } = props;
  return (
    <div
      className="  flex px-40  items-center justify-center"
      style={{ width: "50vw", height: "100vh" }}
    >
      <BoxForm change={change} />
    </div>
  );
}
