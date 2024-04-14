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
    <div className="meeting-card flex flex-col p-2 rounded-lg gap-5  md:flex-row lg:gap-0 md:justify-between md:items-center md:py-[17px] md:pr-[48px] md:pl-[24px] md:rounded-[77px] bg-[#F3F3F3] border border-[#CECECE] shadow-[0px_1px_35.5px_0px_rgba(41,41,41,0.09)]">
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