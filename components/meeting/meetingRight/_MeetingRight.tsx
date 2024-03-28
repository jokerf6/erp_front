// Components
import Participants from "./participants/Participants";
import Chat from "./chat/Chat";

export default function MeetingRight() {
  return (
    <aside className="w-[30%] flex flex-col">
      <Participants />
      <Chat />
    </aside>
  );
}
