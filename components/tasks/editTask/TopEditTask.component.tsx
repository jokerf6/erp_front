import React from "react";
import { Icon } from "@iconify/react";
import { statusList } from "@/static/statusList";
import CheckBox from "@/components/default/checkBox";
import getTaskPriorityColors from "@/functions/getTaskPriorityColors";
import { FormatDate } from "@/utils/formatDate";
import { kMaxLength } from "buffer";

export default function TopEditTask(props: {
  isOpen: any;
  task: any;
  loading: boolean;
}) {
  const [status, setStatus] = React.useState<string>(
    !props.loading ? props.task.status : "ToDo"
  );
  const { loading } = props;
  console.log(props.task);
  return (
    <div>
      <div className="first-part  flex flex-col gap-4 p-[20px]">
        <div className="flex justify-between">
          <h3 className="text-primary-p">
            Created At {!loading && FormatDate(props.task.createdAt, true)}
          </h3>
          <Icon
            icon="gg:close-r"
            className="text-[1.5rem] cursor-pointer"
            onClick={() => {
              props.isOpen(false);
              setStatus("");
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-sider-title-text text-[1.5rem]">
            {!loading && props.task.name}
          </h1>
          <p
            className={`${
              !loading && getTaskPriorityColors(props.task.status)
            } rounded-lg px-4 py-1 capitalize`}
          >
            {!loading && props.task.priority}
          </p>
        </div>
        <h2 className="text-primary-pink font-bold">
          To be Done in {!loading && FormatDate(props.task.dueDate, false)}
        </h2>
        <p className="text-primary-p">{!loading && props.task.brief}</p>
        <div className="flex justify-between items-center">
          {statusList.map((item: string, idx: number) => {
            console.log(status);
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
      </div>
    </div>
  );
}
