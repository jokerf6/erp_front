// Components
import MeetingLeft from "./meetingLeft/_MeetingLeft";
import MeetingRight from "./meetingRight/_MeetingRight";

export default function MeetingContent() {
  return (
    <main className="flex h-screen">
      <MeetingLeft />
      <MeetingRight />
    </main>
  );
}
