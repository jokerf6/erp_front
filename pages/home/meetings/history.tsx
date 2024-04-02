import Head from "next/head";

// Layout
import HomeLayout from "@/layouts/home";

// Components
import ProfilePicture from "@/components/default/profilePicture.component";
import TopRightButtons from "@/components/meetings/TopRightButtons/TopRightButtons";
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

      <TopRightButtons />
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
                />
                <MeetingCard.TitleOwnerContainer>
                  <MeetingCard.Title>Stand Up meeting</MeetingCard.Title>
                  <MeetingCard.Owner>Ahmed's</MeetingCard.Owner>
                </MeetingCard.TitleOwnerContainer>
              </MeetingCard.Info>

              <MeetingCard.Duration>
                Duration: 1h 13m
              </MeetingCard.Duration>

              <MeetingCard.Button>Start meeting</MeetingCard.Button>
            </MeetingCard>
          </MeetingCardsContainer>
        </DateMeetingsContainer>
      </AllMeetingsContainer>
    </>
  );
}

History.PageLayout = HomeLayout;
