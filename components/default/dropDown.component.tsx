import React from "react";

export default function DropDown(props: {
  data: any;
  title: string;
  default: string;
  name: string;
  setoption:any;
}) {
  return (
    <div className="input-6 flex flex-col gap-1">
      <label
        className="text-[#251B37] text-[1rem] font-medium"
        htmlFor="priority"
      >
        {props.title}
        <span className="text-[0.8rem] text-[red]"> (Required)</span>
      </label>
      <select
        required
        name={props.name}
        className=" outline-none rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]"
        placeholder="choose task priority"
      >
        {props.data && props.data.map((item: any) => {
          return <option onClick={props.setoption(item.id)} className=" outline-none">{item.name}</option>;
        })}
      </select>
    </div>
  );
}
