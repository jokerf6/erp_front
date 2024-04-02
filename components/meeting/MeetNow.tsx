import { useContext } from "react";

// Icons
import { CallStartIcon } from "@/assets/icons";

// Context
import { HomeContext } from "@/layouts/home";

export default function MeetNow(props: { header: boolean }) {
  const { setShowMeeting } = useContext(HomeContext);

  const styles = props.header
    ? "bg-[#5B4C83] hover:bg-[#B6A6D3]"
    : "bg-primary-pink hover:bg-primary-pink/80";

  return (
    <button
      onClick={() => setShowMeeting(true)}
      className={`${styles} text-white flex justify-center items-center w-[36px] h-[36px] rounded-full lg:gap-[8px] lg:w-[148px] lg:h-[36px] lg:rounded-[26px] transition-all`}
    >
      <CallStartIcon className="text-[20px]" />
      <p className="capitalize text-[14px] font-[500] hidden lg:block">
        Meet Now
      </p>
    </button>
  );
}
