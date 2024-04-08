import { AttendedIcon, MissedIcon } from "@/assets/icons";

export default function MeetingCardAttendance(props: { children: string }) {
  return (
    <>
      {props.children.toLocaleLowerCase() === "attended" ? (
        <div className="attendance text-[#6A9D00] flex items-center gap-2 text-[20px] font-[400]">
          <span className="capitalize">attended</span>
          <AttendedIcon />
        </div>
      ) : (
        <div className="attendance text-[#D3042C] flex items-center gap-2 text-[20px] font-[400]">
          <span className="capitalize">missed</span>
          <MissedIcon />
        </div>
      )}
    </>
  );
}
