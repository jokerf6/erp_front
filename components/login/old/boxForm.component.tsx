import React, { useState } from "react";
import Login from "../login/login.component";
import Footer from "../../default/footer.component";
import Change from "../../change/zoldchange.component";
export default function BoxForm(props: { pages: number }) {
  const { pages } = props;
  const [id, setId] = useState("-1");

  return (
    <div className=" flex flex-col gap-5 w-full max-w-[500px]">
      {pages === 0 ? (
        <Login id={id} setId={setId} />
      ) : (
        <Change id={id} change={true} />
      )}
    </div>
  );
}
