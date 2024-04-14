import Head from "next/head";

// Layout
import HomeLayout from "@/layouts/home";

// Components
import React from "react";
import ProfilePicture from "@/components/default/profilePicture.component";
import AllMeetingsCardsContainer from "@/components/meetings/AllMeetingsCardsContainer/AllMeetingsCardsContainer";
import DateMeetingsContainer from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/DateMeetingsContainer";
import MeetingDate from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/MeetingDate";
import MeetingCardsContainer from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/MeetingCardsContainer/MeetingCardsContainer";
import MeetingCard from "@/components/meetings/AllMeetingsCardsContainer/DateMeetingsContainer/MeetingCardsContainer/MeetingCard/MeetingCard";

// Components

export default function UpcomingMeetings() {
  return (
    <>
      <Head>
        <title>ERP | Upcoming Meetings</title>
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
                  alt={"username"}
                />
                <MeetingCard.TitleOwnerContainer>
                  <MeetingCard.Title>Stand Up meeting</MeetingCard.Title>
                  <MeetingCard.Owner>Ahmed's</MeetingCard.Owner>
                </MeetingCard.TitleOwnerContainer>
              </MeetingCard.Info>

              <MeetingCard.Duration>
                From 10:00 AM To 11:00 AM
              </MeetingCard.Duration>

              <MeetingCard.Button>Join meeting</MeetingCard.Button>
            </MeetingCard>
          </MeetingCardsContainer>
        </DateMeetingsContainer>

        <DateMeetingsContainer>
          <MeetingDate>3 Jun. 2024</MeetingDate>

          <MeetingCardsContainer>
            <MeetingCard>
              <MeetingCard.Info>
                <ProfilePicture
                  border={true}
                  size={88}
                  src={"/images/woman.png"}
                  alt={"username"}
                />
                <MeetingCard.TitleOwnerContainer>
                  <MeetingCard.Title>ERP Requirements</MeetingCard.Title>
                  <MeetingCard.Owner>your</MeetingCard.Owner>
                </MeetingCard.TitleOwnerContainer>
              </MeetingCard.Info>

              <MeetingCard.Duration>
                From 10:00 AM To 11:00 AM
              </MeetingCard.Duration>

              <MeetingCard.Button>Join meeting</MeetingCard.Button>
            </MeetingCard>
            <MeetingCard>
              <MeetingCard.Info>
                <ProfilePicture
                  border={true}
                  size={88}
                  src={"/images/woman.png"}
                  alt={"username"}
                />
                <MeetingCard.TitleOwnerContainer>
                  <MeetingCard.Title>ERP Requirements</MeetingCard.Title>
                  <MeetingCard.Owner>your</MeetingCard.Owner>
                </MeetingCard.TitleOwnerContainer>
              </MeetingCard.Info>

              <MeetingCard.Duration>
                From 7:00 AM To 9:00 AM
              </MeetingCard.Duration>

              <MeetingCard.Button>Join meeting</MeetingCard.Button>
            </MeetingCard>
          </MeetingCardsContainer>
        </DateMeetingsContainer>
      </AllMeetingsCardsContainer>
    </>
  );
}

UpcomingMeetings.PageLayout = HomeLayout;
