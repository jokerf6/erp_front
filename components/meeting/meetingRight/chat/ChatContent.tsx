import React, { useContext } from "react";

// Icons
import { AttachmentIcon, EmptyChatIcon, SendIcon } from "@/assets/icons";

// Context
import { MeetingContext } from "@/components/meeting/Meeting";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";

export default function ChatContent() {
  const { showParticipants } = useContext(MeetingContext);
  return (
    <div className="chat--content bg-lite-white flex flex-col items-center flex-1">
      <div
        className={`chat--messages px-[24px] py-[28px] ${
          showParticipants
            ? "max-h-[calc(50vh-112px)]"
            : "max-h-[calc(100vh-(140px+72px))]"
        } flex-1 `}
      >
        {/* <div className="empty-chat text-primary-purple h-full flex flex-col justify-center items-center gap-2">
          <EmptyChatIcon className="text-[97px] flex-shrink" />
          <p className="capitalize text-[18px] font-[500]">
            Start chat with Participants
          </p>
        </div> */}

        <section className="full-chat flex flex-col gap-[34px] h-full overflow-y-auto meeting-scrollbar pr-2">
          <div className="member-message grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px] gap-y-[12px] font-[500]">
            <div className="col-span-3 grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px]">
              <ProfilePicture border={true} size={55} src={"/images/man.png"} alt="username" />
              <div className="message-content bg-white px-[13.5px] pb-[9px] rounded-[10px]">
                <span className="member-name text-[10px] text-[#AFAFAF] capitalize">
                  John Doe
                </span>
                <p className="message-body text-[14px] text-primary-purple">
                  Good afternoon, everyone.
                </p>
              </div>
              <div className="message-time text-[10px] text-[#AFAFAF] flex items-center justify-center">
                11:02 AM
              </div>
            </div>

            <div className="message-content col-start-2 col-end-2 bg-white px-[13.5px] py-[9px] rounded-[10px]">
              <p className="message-body text-[14px] text-primary-purple">
                We will start this meeting
              </p>
            </div>
          </div>

          <div className="member-message grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px] gap-y-[12px] font-[500]">
            <div className="col-span-3 grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px]">
              <ProfilePicture
                border={true}
                size={55}
                src={"/images/woman.png"}
                alt="username"
              />
              <div className="message-content bg-white px-[13.5px] pb-[9px] rounded-[10px]">
                <span className="member-name text-[10px] text-[#AFAFAF] capitalize">
                  Joshua Abraham
                </span>
                <p className="message-body text-[14px] text-primary-purple">
                  Yes, Let’s start this meeting
                </p>
              </div>
              <div className="message-time text-[10px] text-[#AFAFAF] flex items-center justify-center">
                11:02 AM
              </div>
            </div>
          </div>

          <div className="member-message grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px] gap-y-[12px] font-[500]">
            <div className="col-span-3 grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px]">
              <ProfilePicture border={true} size={55} src={"/images/man.png"} alt="username" />
              <div className="message-content bg-white px-[13.5px] pb-[9px] rounded-[10px]">
                <span className="member-name text-[10px] text-[#AFAFAF] capitalize">
                  John Doe
                </span>
                <p className="message-body text-[14px] text-primary-purple">
                  Today, we are here to discuss last week’s sales.
                </p>
              </div>
              <div className="message-time text-[10px] text-[#AFAFAF] flex items-center justify-center">
                12:04 PM
              </div>
            </div>
          </div>

          <div className="member-message grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px] gap-y-[12px] font-[500]">
            <div className="col-span-3 grid grid-cols-[55px_minmax(200px,1fr)_minmax(30px,50px)] gap-x-[20px]">
              <ProfilePicture border={true} size={55} src={"/images/man.png"} alt="username" />
              <div className="message-content bg-white px-[13.5px] pb-[9px] rounded-[10px]">
                <span className="member-name text-[10px] text-[#AFAFAF] capitalize">
                  John Doe
                </span>
                <p className="message-body text-[14px] text-primary-purple">
                  Today, we are here to discuss last week’s sales.
                </p>
              </div>
              <div className="message-time text-[10px] text-[#AFAFAF] flex items-center justify-center">
                12:04 PM
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="chat--input bg-white w-full flex items-center px-[15px] py-[5px] h-[72px] border-t-[1.5px] border-l-[1.5px] border-[#EDF0F6]">
        <div className="bg-lite-white text-[#8D8F98] w-full rounded-[88px] flex justify-between items-center gap-2 px-[10px] py-[5px]">
          <button className="p-2">
            <AttachmentIcon className="text-[19px]" />
          </button>
          <input
            type="text"
            placeholder="Type Something..."
            className="bg-transparent flex-1 font-[500] outline-none"
          />
          <button className="bg-primary-purple rounded-full w-[30px] h-[30px] grid place-items-center">
            <SendIcon className="text-[20px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
