import EditItemNum from "@/components/sider/SiderEdit/EditItem/EditItemNum";
import EditItemTitle from "@/components/sider/SiderEdit/EditItem/EditItemTitle";
import EditItemTitleNum from "@/components/sider/SiderEdit/EditItem/EditItemTitleNum";
import { MEDIA } from "@/secrets";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";

export default function Teammates(props: {
  cardPeople?: any;
  setAddTeammates: any;
}) {
  const myImages = props.cardPeople.map((user: any, idx: number) => {
    return (
      <div className="flex gap-4" key={idx}>
        <img
          src={MEDIA + user["user"].image}
          alt="Photo"
          key={idx}
          className="w-[32px] h-[32px] rounded-full"
        />
        <div className="">
          <h2 className="font-bold text-sider-primary-text">
            {user["user"].name}{" "}
          </h2>
          <h3 className="text-sider-role-text">
            {user["user"].jobPosition.name}{" "}
          </h3>
        </div>
      </div>
    );
  });
  return (
    <div className="file-content flex flex-col gap-4 p-[20px]">
      <div className="part-one flex justify-between">
        <EditItemTitleNum>
          <EditItemTitle>Teammates</EditItemTitle>
          <EditItemNum>{props.cardPeople.length}</EditItemNum>
        </EditItemTitleNum>
        <MdModeEditOutline
          className=" text-add-btn-pink-text cursor-pointer w-[21px] h-[21px]"
          onClick={() => props.setAddTeammates(true)}
        />
      </div>
      <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[200px] scroll-m-2 bg-[#FFFFFF]">
        <div className="teammates-content flex flex-col gap-4 ">{myImages}</div>
      </div>
    </div>
  );
}
