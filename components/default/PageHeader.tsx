import { GetProjects } from "@/services/getProjects";
import ProjectStore from "@/store/projects";
import { Icon } from "@iconify/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";

export default function PageHeader(props: {
  currentPage: string;
  currentTab: string;
  currentTabs: string[];
}) {
  const [options, setOptions] = useState<any>();
  const { id, updateId } = ProjectStore();
  const queryClient = useQueryClient();
  const { isLoading } = useQuery({
    queryKey: ["getProjects"],
    queryFn: () => GetProjects(getCookie("AccessToken")!, setOptions),
    enabled: true,
  });

  const handleSelectChange = async (selectedOption: any) => {
    if (selectedOption !== null) {
      await updateId(selectedOption.value);
      await queryClient.invalidateQueries({ queryKey: ["getTasks"] });
    } else {
      await updateId(null);

      await queryClient.invalidateQueries({ queryKey: ["getTasks"] });
    }
  };

  const tabElements = props.currentTabs.map((tab) => {
    const tabRemovedSpaces = tab.replace(/ /g, "");
    const activeTabStyle =
      props.currentTab === tabRemovedSpaces ? "after:bg-main" : "grow-0";

    return (
      <Link
        key={tab}
        href={`/home/${props.currentPage}/${tabRemovedSpaces}`}
        className={`${activeTabStyle} flex-auto shrink-0 sm:flex-none text-sm sm:text-base transition-all cursor-pointer text-main font-bold px-2 py-4 text-center relative after:transition-all after:absolute after:w-full after:h-1.5 hover:after:bg-main after:left-0 after:top-full`}
      >
        {tab}
      </Link>
    );
  });

  return (
    <header>
      <div className=" w-full flex justify-between items-center px-5 lg:px-10 py-4">
        <span
          className={`text-main font-semibold text-xl ${
            props.currentPage.length === 2 ? "uppercase" : "capitalize"
          }`}
        >
          {props.currentPage}
        </span>
        {props.currentPage !== "pm" && props.currentTab !== "tasks" && (
          <div className=" flex gap-2 items-center">
            <span
              className={`text-text ${
                props.currentPage.length === 2 ? "uppercase" : "capitalize"
              }`}
            >
              {props.currentPage}
            </span>
            <Icon icon={"ep:arrow-right"} className=" text-text" />
            <span className=" text-main font-bold capitalize">
              {props.currentTabs.filter(
                (tab) => tab.replace(/ /g, "") === props.currentTab && tab
              )}
            </span>
          </div>
        )}
        <Select
          onChange={handleSelectChange}
          options={options || []}
          closeMenuOnSelect={true}
          className=" border  outline-none z-20 w-[200px]  focus:outline-none cursor-text border-[#251B37] rounded-[5px] placeholder:text-[#3F3C3D] text-[#3F3C3D]"
          placeholder="Filter by project"
          classNamePrefix="select"
          isClearable
          noOptionsMessage={() => "No options available"} // Show message when options array is empty
        />
      </div>

      <div className="w-full px-1 lg:px-10 flex gap-2 lg:gap-6 flex-row capitalize select-none border-b-[6px] border-[#E9E3D5]">
        {tabElements}
      </div>
    </header>
  );
}
