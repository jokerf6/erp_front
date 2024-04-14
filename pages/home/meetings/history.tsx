import Head from "next/head";

// Layout
import HomeLayout from "@/layouts/home";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";
import AllMeetingsCardsContainer from "@/components/meetings/AllMeetingsCardsContainer/AllMeetingsCardsContainer";
import DateMeetingsContainer from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/DateMeetingsContainer";
import MeetingDate from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/MeetingDate";
import MeetingCardsContainer from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/MeetingCardsContainer/MeetingCardsContainer";
import MeetingCard from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/MeetingCardsContainer/MeetingCard/MeetingCard";

export default function History() {
  return (
    <>
      <Head>
        <title>ERP | Meetings - History</title>
      </Head>

      <AllMeetingsCardsContainer>
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
      </AllMeetingsCardsContainer>
    </>
  );
}

History.PageLayout = HomeLayout;
