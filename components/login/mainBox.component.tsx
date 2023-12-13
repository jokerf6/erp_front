import React from "react";
import BoxForm from "./boxForm.component";

export default function Right(props: { pages: number }) {
  const { pages } = props;
  return (
    <div
      className=" xl:w-half lg:w-half w-full  flex xl:px-40 lg:px-30 px-10  items-center justify-center"
      style={{ height: "100vh" }}
    >
      <BoxForm pages={pages} />
    </div>
  );
}
