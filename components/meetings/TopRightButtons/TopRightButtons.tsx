import MeetNow from "@/components/meeting/MeetNow";
import ScheduleMeetingButton from "./ScheduleMeetingButton";

export default function TopRightButtons(props:{setScheduleOverlay:any}) {
  return (
    <div className="flex gap-[21px] justify-end mt-[16px] mb-[8px] pr-5 lg:pr-[50px]">
      <MeetNow header={false} />
      <ScheduleMeetingButton setScheduleOverlay = {props.setScheduleOverlay} />
    </div>
  );
}
