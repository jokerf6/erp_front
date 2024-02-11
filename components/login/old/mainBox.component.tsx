import React from "react";
import BoxForm from "./boxForm.component";

export default function Right(props: { pages: number }) {
  const { pages } = props;
  return (
    <div
      className=" flex items-center justify-center h-full w-full"
    >
      <BoxForm pages={pages} />
    </div>
  );
}
