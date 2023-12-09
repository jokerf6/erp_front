"use client";
import React from "react";
import Button from "../../default/button.component";

export default function Left() {
  return (
    <div className=" xl:w-1/2 lg:w-1/2 w-full xl:text-start lg:text-start text-center flex flex-col xl:items-start lg:items-start items-center xl:gap-2 lg:gap-2 md:gap-2 sm:gap-1">
      <h1 className=" xl:text-4xl lg:text-4xl md:text-2xl text-2xl font-extrabold">
        Hi, I am
      </h1>
      <h1 className="xl:text-4xl lg:text-4xl md:text-2xl text-2xl text-orange font-extrabold">
        Fahd Hakem
      </h1>
      <div className=" xl:text-4xl lg:text-4xl md:text-xl text-xl flex   relative  w-fit pr-3 h-fit  ">
        I'm a
        <div className="text-orange   typed-out overflow-hidden ml-2   ">
          Full-stack Developer
        </div>
      </div>
      <p className=" xl:text-lg lg:text-lg md:text-lg text-md mb-5 font-light">
        A Software Engineer With Solid Knowledge In Front-End Technologies, And
        Software Development Principles, Looking Forward To Working At An
        Innovative Where I Can Devolop My Skills.
      </p>
      <Button />
    </div>
  );
}
