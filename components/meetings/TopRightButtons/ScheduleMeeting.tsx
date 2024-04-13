import { CalenderIcon } from "@/assets/icons";

export default function ScheduleMeeting(props:{setScheduleIsOpen:any}) {
  return (
    <button className="schedule-meeting bg-primary-pink hover:bg-primary-pink/80 text-white flex justify-center items-center w-[36px] h-[36px] rounded-full lg:gap-[8px] lg:w-[201px] lg:h-[36px] lg:rounded-[26px] transition-all" onClick={()=>{props.setScheduleIsOpen(true)}}>
      <CalenderIcon className="text-[20px]" />
      <p className="capitalize text-[14px] font-[500] hidden lg:block">
        schedule meeting
      </p>
    </button>
  );
}
