import Head from "next/head";

// Layout
import HomeLayout from "@/layouts/home";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";
import AllMeetingsContainer from "@/components/meetings/AllMeetingsContainer";
import DateMeetingsContainer from "@/components/meetings/DateMeetingsContainer/DateMeetingsContainer";
import MeetingDate from "@/components/meetings/DateMeetingsContainer/MeetingDate";
import MeetingCardsContainer from "@/components/meetings/DateMeetingsContainer/MeetingCardsContainer/MeetingCardsContainer";
import MeetingCard from "@/components/meetings/DateMeetingsContainer/MeetingCardsContainer/MeetingCard/MeetingCard";

export default function History() {
  return (
    <>
      <Head>
        <title>ERP | Meetings - History</title>
      </Head>

      <AllMeetingsContainer>
        <DateMeetingsContainer>
          <MeetingDate>today</MeetingDate>

          <MeetingCardsContainer>
            <MeetingCard>
              <MeetingCard.Info>
                <ProfilePicture
                  border={true}
                  size={88}
                  src={"/images/man.png"}
                  alt="username"
                />
                <MeetingCard.TitleOwnerContainer>
                  <MeetingCard.Title>Stand Up meeting</MeetingCard.Title>
                  <MeetingCard.Owner>Ahmed's</MeetingCard.Owner>
                </MeetingCard.TitleOwnerContainer>
              </MeetingCard.Info>

              <MeetingCard.Duration>Duration: 1h 13m</MeetingCard.Duration>

              <MeetingCard.Attendance>Attended</MeetingCard.Attendance>

              <MeetingCard.Button>Start again</MeetingCard.Button>
            </MeetingCard>
          </MeetingCardsContainer>
        </DateMeetingsContainer>
      </AllMeetingsContainer>
    </>
  );
}

History.PageLayout = HomeLayout;
