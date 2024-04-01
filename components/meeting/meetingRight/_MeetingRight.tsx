// Components
import Participants from "./participants/Participants";
import Chat from "./chat/Chat";

export default function MeetingRight() {
  return (
    <aside className="max-w-[30%] flex flex-col flex-1">
      <Participants />
      <Chat />
    </aside>
  );
}
