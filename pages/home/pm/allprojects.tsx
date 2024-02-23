import React from "react";
import {Icon} from '@iconify/react'
import Card from '@/components/tasks/All Projects/Card.component'
// Layout
import PMLayout from "@/layouts/pm";

import Head from "next/head";

export default function AllProjects() {
  return (
    <div className=" bg-[#E9E3D58A]">
      <Head>
        <title>ERP | All Projects</title>
      </Head>
      
      <div className="page-content mx-[50px] my-[50px] flex flex-col p-[20px]  gap-8">
        <div className="part-One flex justify-between">
          <div className="flex  items-center gap-4">
            <h1 className="font-bold text-[1.5rem]">All projects</h1>
            <Icon icon={"lets-icons:add-round"} className="w-6 h-6  bg-cat" />
          </div>
          <div className="bg-[#FFFFFF] rounded-2xl  p-2 flex gap-4 justify-between items-center">
            <span className="text-[#3F3849]"> Search for Project</span>
            <Icon icon="ion:search-outline"  className="text-[1.5rem]"/>
          </div>
        </div>
        <div className="part-Two grid grid-cols-[repeat(auto-fill,minmax(300px,400px))] lg:grid-cols-[repeat(auto-fill,minmax(300px,400px))] md:grid-cols-2 gap-4 justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="bg-green-500 flex ">
          <p className=" justify-end bg-red-500 w-fit">Not Completed Part</p>
        </div>
      </div>
    </div>
  );
}

AllProjects.PageLayout = PMLayout;
