import CheckBox from "@/components/default/checkBox";
import { statusList } from "@/static/statusList";
import React from "react";

export default function Status(props: { status: string; setStatus: any }) {
  const { status, setStatus } = props;
  return (
    <div className="flex justify-between items-center">
      {statusList.map((item: string, idx: number) => {
        return (
          <CheckBox
            active={
              (status === "ToDo" && idx === 0) ||
              (status === "InProgress" && idx === 1) ||
              (status === "Done" && idx === 2)
            }
            key={idx}
            text={item}
            setStatus={setStatus}
            id={idx + 1}
          />
        );
      })}
    </div>
  );
}
