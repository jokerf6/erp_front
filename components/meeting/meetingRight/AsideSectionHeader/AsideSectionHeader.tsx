import Title from "./Title";
import Arrow from "./Arrow";

export default function AsideSectionHeader(props: {
  children: any;
  setShow: any;
}) {
  return (
    <div
      onClick={() => props.setShow((prev: boolean) => !prev)}
      className="chat--header bg-white flex justify-between items-center pl-[20px] pr-[10px] h-[70px] border-b border-[#FDFBFB] cursor-pointer"
    >
      {props.children}
    </div>
  );
}

AsideSectionHeader.Title = Title;
AsideSectionHeader.Arrow = Arrow;
