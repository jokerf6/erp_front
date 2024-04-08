// Components
import MeetingCardInfo from "./MeetingCardInfo";
import MeetingCardTitleOwner from "./MeetingCardTitleOwner";
import MeetingCardTitle from "./MeetingCardTitle";
import MeetingCardOwner from "./MeetingCardOwner";
import MeetingCardDuration from "./MeetingCardDuration";
import MeetingCardButton from "./MeetingCardButton";
import MeetingCardAttendance from "./MeetingCardAttendance";

export default function MeetingCard(props: { children: any }) {
  return (
    <div className="meeting-card flex justify-between items-center py-[17px] pr-[48px] pl-[24px] bg-[#F3F3F3] border border-[#CECECE] shadow-[0px_1px_35.5px_0px_rgba(41,41,41,0.09)] rounded-[77px]">
      {props.children}
    </div>
  );
}

MeetingCard.Info = MeetingCardInfo
MeetingCard.TitleOwnerContainer = MeetingCardTitleOwner
MeetingCard.Title = MeetingCardTitle
MeetingCard.Owner = MeetingCardOwner
MeetingCard.Duration = MeetingCardDuration
MeetingCard.Button = MeetingCardButton
MeetingCard.Attendance = MeetingCardAttendance