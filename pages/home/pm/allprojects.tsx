import React from "react";
import { Icon } from '@iconify/react'
import Card from '@/components/tasks/All Projects/Card.component'
import EditAllProject from "@/components/tasks/All Projects/EditAllProject.component";
// Layout
import PMLayout from "@/layouts/pm";
import Head from "next/head";

export default function AllProjects() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [projectData, setProjectData] = React.useState({ progress: 0, name: "", people: [] })
  // Function to Get progress and name of project
  function getData(progress: number, name: string, people: any) {
    setProjectData({ progress, name, people });
  }
  const myData = [
    {
      id: 1,
      project: "project 1",
      progress: 20,
      files: 5,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3
        },
      ]
    },
    {
      id: 2,
      project: "project 2",
      progress: 40,
      files: 20,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3
        },
      ]
    },
    {
      id: 3,
      project: "project 3",
      progress: 60,
      files: 5,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3
        },
      ]
    },
    {
      id: 4,
      project: "project 4",
      progress: 80,
      files: 5,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3
        },
      ]
    },
    {
      id: 5,
      project: "project 5",
      progress: 100,
      files: 500,
      photo: [
        {
          name: "Kerolos Fayez",
          jobTitle: "Front-End",
          image: "/images/Kerolos Fayez.jpg",
          position: "Member",
          id: 1
        },
        {
          name: "Matthew Adel",
          jobTitle: "Front-End",
          image: "/images/Matthew Adel.jpg",
          position: "Member",
          id: 2
        },
        {
          name: "Fahd Hakem",
          jobTitle: "Back-End",
          image: "/images/Sheta.png",
          position: "Member",
          id: 3
        },
        {
          name: "Ayten",
          jobTitle: "UI/UX",
          image: "/images/woman.png",
          position: "Member",
          id: 4
        }
      ]
    }
  ]
  const myCards = myData.map((data => {
    return <Card
      key={data.id}
      name={data.project}
      id={data.id}
      files={data.files}
      photo={data.photo}
      progress={data.progress}
      closeBig={setIsOpen}
      getData={() => getData(data.progress, data.project, data.photo)}
    />
  }))
  return (
    <div className="p-[25px] ">
      <Head>
        <title>ERP | All Projects</title>
      </Head>
      {isOpen && <div className=" bg-black h-full absolute -top-[10px] left-0 z-20 opacity-70"></div>}
      {isOpen && <div className="absolute top-0 right-0 bg-white p-10 z-20 overflow-auto h-full ">
        <EditAllProject cardName={projectData.name} cardProgress={projectData.progress} cardPeople={projectData.people} />
      </div>}
      <div className="page-content flex flex-col md:p-[40px] p-[10px] gap-8  bg-[#E9E3D58A] rounded-xl">
        <div className="part-One flex justify-between flex-col xls:flex-row gap-4">
          <div className="flex  items-center gap-4 ">
            <h1 className="font-bold text-[1.5rem]">All projects</h1>
            <Icon icon={"lets-icons:add-round"} className="w-6 h-6  bg-[#251B37]/20 rounded-lg cursor-pointer" />
          </div>
          <div className="bg-[#FFFFFF] rounded-2xl  p-2 flex gap-4 justify-between items-center">
            <input type="text" placeholder="Search For Project" className="text-[#3F3849] indent-2 border-none focus:outline-none" />
            <Icon icon="ion:search-outline" className="text-[1.5rem]" />
          </div>
        </div>
        <div className="part-Two grid grid-cols-[repeat(auto-fill,minmax(0,400px))] md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 lg:justify-between">
          {myCards}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#251B37] font-bold">Page 1</p>
          <p className=" w-fit">Not Completed Part</p>
        </div>
      </div>
    </div>
  );
}

AllProjects.PageLayout = PMLayout;
