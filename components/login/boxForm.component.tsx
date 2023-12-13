import React, { useState } from "react";
import Login from "../login/login.component";
import Footer from "../default/footer.component";
import Change from "../change/change.component";
export default function BoxForm(props: { pages: number }) {
  const { pages } = props;
  const [id, setId] = useState("-1");

  return (
    <div className="  w-full flex flex-col gap-4">
      <img
        src="/images/logo.png"
        className={` ${
          pages === 1
            ? "absolute top-0 xl:left-1/2 lg:left-1/2 left-0 ml-5 mt-5"
            : ""
        }`}
        style={{ width: "100px", height: "50px" }}
      />
      {pages === 0 ? <Login id={id} setId={setId} /> : <Change id={id} />}

      <Footer />
    </div>
  );
}
