import MeetNowButton from "@/components/meetings/TopRightButtons/MeetNowButton";
import ScheduleMeetingButton from "./ScheduleMeetingButton";

export default function TopRightButtons(props:{setScheduleOverlay:any}) {
  return (
    <div className="flex gap-[21px] justify-end mt-[16px] mb-[8px] pr-5 lg:pr-[50px]">
      <MeetNowButton header={false} />
      <ScheduleMeetingButton setScheduleOverlay = {props.setScheduleOverlay} />
    </div>
  );
}
