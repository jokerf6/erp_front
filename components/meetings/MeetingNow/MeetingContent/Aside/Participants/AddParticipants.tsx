import React, { useContext } from "react";

// Context
import { MeetingContext } from "@/components/meetings/MeetingNow/Meeting";

// Components
import Modal from "@/components/default/modal.component";
import ProfilePicture from "@/components/default/profilePicture.component";

// Icons
import { CheckIcon, CloseButtonIcon } from "@/assets/icons";

export default function AddParticipants() {
  const { setShowAddParticipants } = useContext(MeetingContext);

  return (
    <Modal setOverlay={setShowAddParticipants}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute top-0 right-0 w-full max-w-[671px] h-screen flex flex-col"
      >
        <button
          onClick={() => setShowAddParticipants(false)}
          className="w-fit ml-auto min-h-[50px] px-2"
        >
          <CloseButtonIcon className="text-primary-purple text-[30px]" />
        </button>
        <form className="add-participants flex flex-col gap-3 h-full max-h-[calc(100vh-50px)]">
          <div className="participants pr-4 mx-[14px] py-2 flex flex-col h-full gap-[24px] overflow-auto meeting-scrollbar">
            {new Array(7).fill(undefined).map((participant, index) => {
              return (
                <label
                  key={index}
                  htmlFor={`${participant}-${index}`}
                  className="paricipant--container flex items-center justify-between bg-[#F5F5F5] rounded-full pl-[8px] py-[8px] pr-[24px] border-[2px] cursor-pointer"
                >
                  <div className="participant-info flex items-center gap-[17px]">
                    <ProfilePicture
                      border={false}
                      size={55}
                      src={"/images/man.png"}
                      alt="username"
                    />
                    <span className="text-primary-purple text-[18px] font-[500] capitalize">
                      Guy Hawkins
                    </span>
                  </div>
                  <label
                    htmlFor={`${participant}-${index}`}
                    className="relative flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name={`${participant}-${index}`}
                      id={`${participant}-${index}`}
                      className="peer appearance-none w-[30px] h-[30px] border-2 border-primary-purple rounded-md checked:bg-primary-purple"
                    />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100">
                      <CheckIcon className="text-2xl text-white" />
                    </span>
                  </label>
                </label>
              );
            })}
          </div>
          <div className="bg-white px-[31px] py-[24px] w-full border-t-2">
            <button
              onClick={(e) => e.preventDefault()}
              className="invite-btn capitalize bg-primary-purple text-white text-[18px] font-[600] w-full py-2 rounded-[73px]"
            >
              invite
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
