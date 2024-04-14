// Components
import Participants from "./Participants/Participants";
import Chat from "./Chat/Chat";

export default function MeetingAside() {
  return (
    <aside className="max-w-[30%] flex flex-col flex-1">
      <Participants />
      <Chat />
    </aside>
  );
}
