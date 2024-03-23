import React from "react";

import { Icon } from "@iconify/react";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";

export default function MeetingHeader(props: {meetingHeaderRef: any}) {
  return (
    <header ref={props.meetingHeaderRef} className="flex bg-white py-[10px] md:py-[20px]">
      <div className="meeting-logo--container hidden lg:flex items-center px-[20px] xl:px-[40px] border-r-2 border-[#EAE9E994]">
        <Icon
          icon="bxl:zoom"
          width="65px"
          height="65px"
          className="text-primary-purple"
        />
      </div>

      <div className="meeting-details--conatiner flex w-full justify-between px-[5px] lg:px-[30px]">
        <div className="meeting-details--left flex flex-1 flex-col justify-center font-[500]">
          <div className="meeting--title capitalize text-[#373131] md:text-[24px]">
            weekly stand up meeting
          </div>
          <div className="meeting-date-time--conatiner flex items-center w-fit capitalize text-[#ACACAC] text-[14px] gap-1">
            <span className="meeting-date">june 12th, 2022</span>
            <span className="separator bg-[#ACACAC] w-[1px] h-[58%]"></span>
            <span className="meeting-time uppercase">11:00 AM</span>
          </div>
        </div>

        <div className="meeting-details--right flex flex-col-reverse items-center gap-2 md:flex-row md:flex-1 md:justify-end xl:gap-[30px]">
          <button className="relative meeting-invitaion-link bg-[#F2EBFE] flex flex-shrink-0 items-center xxs:gap-2 md:h-[40px] xl:h-[55px] px-[10px] rounded-full">
            <span className="w-[22.5px] xl:w-[30px]">
              <Icon icon="fluent:link-24-regular" width="100%" />
            </span>
            <span className="separator hidden md:block bg-primary-purple w-[1px] h-[40%]"></span>
            <span className="capitalize absolute top-50 right-[110%] xxs:static w-max text-[8px] xxs:text-[14px] xl:text-base text-primary-p xxs:text-primary-purple xxs:font-[500]">
              copy invitaion link
            </span>
          </button>
          <div className="user--conatiner bg-[#F6F6F6] flex items-center xxs:gap-2 lg:gap-[16px] w-full max-w-[200px] xl:max-w-[300px] xl:h-[80px] rounded-full xl:px-[15px]">
            <div className="user--image border border-lite-purple rounded-full">
              <ProfilePicture border={true} size={"50"}/>
            </div>
            <div className="user--details capitalize font-[500]">
              <div className="user--name hidden xxs:block text-[#25293B] text-[16px]">
                kerolos fayez
              </div>
              <div className="user--role hidden xxs:block text-[#9E9E9E] text-[13px] tracking-[0.03em]">
                moderator
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
