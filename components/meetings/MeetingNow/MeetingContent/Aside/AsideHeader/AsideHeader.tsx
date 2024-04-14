import AsideHeaderArrow from "./AsideHeaderArrow";
import AsideHeaderTitle from "./AsideHeaderTitle";

export default function AsideHeader(props: {
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

AsideHeader.Title = AsideHeaderTitle;
AsideHeader.Arrow = AsideHeaderArrow;
