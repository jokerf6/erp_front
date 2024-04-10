import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi"; // Assuming you're using react-icons for the chevron icon

export default function DropDown(props: {
  data: any;
  name: string;
  click: any;
}) {
  // Function to get value of option
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    {
      props.click(value);
    }
  }, [value]);
  return (
      <div className=" w-full flex items-center justify-center">
        <select
          required
          name={props.name}
          className="block text-[14px] pr-[32px] appearance-none w-full placeholder:text-[8px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          placeholder="choose task priority"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        >
          <option value="free">
            {props.name === "priority" ? "Task Priority" : "Choose The Project"}
          </option>
          {props.data.map((item: any) => {
            return (
              <option key={item.id} value={item.id}>
                {" "}
                {item.name}{" "}
              </option>
            );
          })}
        </select>
        <HiOutlineChevronDown className=" absolute right-[30px]" />
      </div>
  );
}
