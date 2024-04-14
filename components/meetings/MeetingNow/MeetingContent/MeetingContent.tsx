// Components
import MeetingMain from "./Main/MeetingMain";
import MeetingAside from "./Aside/MeetingAside";

export default function MeetingContent() {
  return (
    <main className="flex h-screen cursor-default">
      <MeetingMain />
      <MeetingAside />
    </main>
  );
}
