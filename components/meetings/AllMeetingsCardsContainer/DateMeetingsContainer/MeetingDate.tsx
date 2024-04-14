export default function MeetingDate(props: { children: any }) {
  return (
    <div className="meeting-date capitalize text-[20px] font-[400] text-[#616161] mb-[16px]">
      {props.children}
    </div>
  );
}
