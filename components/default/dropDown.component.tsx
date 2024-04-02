import React from "react";

export default function DropDown(props: {
  data: any;
  title: string;
  default: string;
  name: string;
  click: any;
}) {
  // Function to get value of option
  const [value, setValue] = React.useState('')
  React.useEffect(()=>{
    {props.click(value)}
  }, [value])
  return (
    <div className="input-6 flex flex-col gap-1">
      <label
        className="text-[#251B37] text-[1rem] font-medium"
        htmlFor={props.title}
      >
        {props.title}
        <span className="text-[0.8rem] text-[red]"> (Required)</span>
      </label>
      <select
        required
        name={props.name}
        className=" outline-none rounded-[5px]  border-[#251B37] border-[1px] indent-[10px] h-[40px]"
        placeholder="choose task priority"
        onChange={(event) => { setValue(event.target.value) }}
      >
        <option value="free">{props.name === "priority" ? "Task Priority" : "Choose The Project"}</option>
        {props.data.map((item: any) => {
          return <option key={item.id} value={item.id}> {item.name} </option>
        })}
      </select>
    </div>
  );
}
