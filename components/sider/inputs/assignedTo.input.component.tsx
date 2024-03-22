import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function AssignedToInput() {
  const assignedtoInputRef = useRef<any>(null);
  const [assignedtoInputValue, setAssignedtoInputValue] = useState("");
  const [assignedtoMembers, setAssignedtoMembers] = useState<any>([]);
  const [isDisplayAssignedtoInput, setIsDisplayAssignedtoInput] =
    useState(false);

  handleClickOutsideAssignedtoInput(assignedtoInputRef);

  return (
    <div className="bg-sider-bg-white rounded-[5px] border-primary-purple border min-h-[40px] flex gap-2 px-2 py-1 flex-wrap">
      {assignedtoMembers.map((member: any, index: number) => {
        return (
          <div
            key={index}
            className="bg-lite-purple px-[12px] w-fit h-[30px] flex items-center gap-[8px] rounded-[5px] capitalize"
          >
            <span>{member}</span>
            <Icon
              icon="gg:close-r"
              width="19"
              height="19"
              className="text-primary-purple cursor-pointer"
              onClick={() => handleAssignedMemberDelete(index)}
            />
          </div>
        );
      })}

      {isDisplayAssignedtoInput ? (
        <span
          ref={assignedtoInputRef}
          className="relative bg-lite-purple px-[12px] w-fit h-[30px] flex items-center rounded-[5px] outline-none"
        >
          {assignedtoInputValue}

          <input
            required
            name="assigned"
            type="text"
            className="absolute top-0 left-0 bottom-0 right-0 indent-[12px] w-full bg-transparent text-transparent caret-black outline-none"
            id="assigned"
            value={assignedtoInputValue}
            maxLength={20}
            onChange={(e) => setAssignedtoInputValue(e.target.value)}
            onKeyDown={(e) => handleKeyDownAssignedtoInput(e)}
            autoFocus
          />
        </span>
      ) : (
        <button
          onClick={() => setIsDisplayAssignedtoInput(true)}
          className="bg-lite-purple h-[30px] flex items-center px-1 rounded-[5px] cursor-pointer"
        >
          <Icon
            icon="gg:add-r"
            width="19"
            height="19"
            className="text-primary-purple"
          />
        </button>
      )}
    </div>
  );

  // Functions
  function handleClickOutsideAssignedtoInput(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (assignedtoInputValue.length > 0) {
            // alert("You clicked outside of me!");
            setAssignedtoMembers((prevMembers: any) => [
              ...prevMembers,
              assignedtoInputValue,
            ]);
          }
          setIsDisplayAssignedtoInput(false);
          setAssignedtoInputValue("");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [assignedtoInputValue]);
  }

  function handleKeyDownAssignedtoInput(e: any) {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      if (assignedtoInputValue.length > 0) {
        setAssignedtoMembers((prevMembers: any) => [
          ...prevMembers,
          assignedtoInputValue,
        ]);
        setAssignedtoInputValue("");
        e.key === "Enter" && setIsDisplayAssignedtoInput(false);
      } else {
        setIsDisplayAssignedtoInput(false);
      }
    }
  }

  function handleAssignedMemberDelete(id: number) {
    setAssignedtoMembers(
      assignedtoMembers.filter((member: any, index: number) => index !== id)
    );
  }
}
