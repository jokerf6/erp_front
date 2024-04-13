import MeetNow from "@/components/meeting/MeetNow";
import ScheduleMeeting from "./ScheduleMeeting";

export default function TopRightButtons(props:{setScheduleIsOpen:any}) {
  return (
    <div className="flex gap-[21px] justify-end mt-[16px] mb-[8px] pr-5 lg:pr-[50px]">
      <MeetNow header={false} />
      <ScheduleMeeting setScheduleIsOpen = {props.setScheduleIsOpen} />
    </div>
  );
}
