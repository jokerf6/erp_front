import Modal from "@/components/default/modal.component";
import { MEDIA } from "@/secrets";
import { AddCommentRequest } from "@/services/addComment";
import UserStore from "@/store/userStore";
import {
  Mutation,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select, { components } from "react-select";
import { GetUsersProject } from "@/services/getUserProject";
import { EditTaskAssignRequest } from "@/services/editTaskAssign";
import { RemoveDuplicatesById } from "@/utils/removeDuplicated";
import { fileURLToPath } from "url";

export default function AddTeammates(props: {
  setAddTeammates: any;
  taskId: string;
  projectId: string;
  assignments: any;
}) {
  const notify = async (error: string) => toast.error(error);

  const { setAddTeammates, taskId, projectId, assignments } = props;
  const queryClient = useQueryClient();
  const [options, setOptions] = useState<any>();
  const [selected, setSelected] = useState<any>();

  const { isLoading } = useQuery({
    queryKey: ["GetUsersProject"],
    queryFn: () =>
      GetUsersProject(
        getCookie("AccessToken")!,
        setOptions,
        projectId,
        assignments,
        setSelected
      ),
    enabled: true,
  });

  const mutation = useMutation({
    mutationFn: () => {
      return EditTaskAssignRequest(
        selected,
        notify,
        taskId,
        getCookie("AccessToken")!,
        setAddTeammates
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTasks"] });
      queryClient.invalidateQueries({ queryKey: ["getTaskId"] });
    },
  });
  const CheckboxOption = (props: any) => (
    <components.Option {...props}>
      <div className={`  w-full flex items-center gap-4`}>
        <div className=" flex gap-3">
          <Image
            src={MEDIA + props.value.image}
            alt="user"
            width={28}
            height={28}
            className=" rounded-full"
          />
          <label>{props.value.name}</label>
        </div>
      </div>
    </components.Option>
  );
  const handleTeamMemberSelection = async (selectedOption: any) => {
    const filter = options.filter((option: any) => !option.value.included);
    const help = [];

    for (let i = 0; i < options.length; i += 1) {
      const exist = selectedOption.some(
        (item: any) => item.value.id === options[i].value.id
      );
      help.push({
        label: options[i].value.name,
        value: {
          id: options[i].value.id,
          name: options[i].value.name,
          image: options[i].value.image,
          included: exist,
        },
      });
    }
    setOptions(help);
    setSelected(selectedOption);
  };
  return (
    <Modal setOverlay={setAddTeammates}>
      <div className="absolute  w-full top-0 left-0 right-0 bottom-0 items-center z-[21] bg-black/20 flex justify-center ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex  flex-col gap-[10px] px-[20px] w-[500px]  py-[15px] h-fit bg-white rounded-lg"
        >
          <div className=" bg-white flex flex-col gap-2 p-[20px]">
            <span className=" text-[#251B37] text-[16px] font-[500]">
              Assigned to (Required)
            </span>
            <Select
              options={
                options &&
                options.filter((option: any) => !option.value.included)
              }
              isMulti
              closeMenuOnSelect={false}
              className="basic-multi-select  border outline-none cursor-text border-[#251B37] rounded-[5px] placeholder:text-[#3F3C3D] text-[#3F3C3D]"
              placeholder="Choose team member"
              value={selected}
              classNamePrefix="select"
              onChange={handleTeamMemberSelection}
              noOptionsMessage={() => "No Users available"} // Show message when options array is empty
              styles={{
                menu: (provided, state) => ({
                  ...provided,
                }),
                menuList: (provided, state) => ({
                  ...provided,
                  maxHeight: "150px", // Set the maximum height of the menu options
                }),
              }}
              components={{ Option: CheckboxOption }} // Use custom component for options
            />
          </div>
          {
            <div className=" flex  w-full justify-between gap-[10px] px-[20px] ">
              <button
                onClick={() => setAddTeammates(false)}
                className=" py-[3px] w-full text-[#251B37] rounded-md border border-[#251B37]"
              >
                Cancel
              </button>
              <button
                onClick={() => mutation.mutate()}
                className="py-[3px]  w-full text-white rounded-md bg-[#251B37]"
              >
                {mutation.isPending ? "Loading..." : "Done"}
              </button>
            </div>
          }
        </div>
      </div>
    </Modal>
  );
}
