import Header from "@/components/default/header.component";
import UserStore from "@/store/userStore";
import React from "react";
export default function index() {
  const { user } = UserStore();
  console.log("hi home2");
  console.log(user);
  return (
    <div>
      <Header />
      <h1>Welcome in Home</h1>
    </div>
  );
}
