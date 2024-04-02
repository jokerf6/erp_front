import Title from "./Title";

export default function AsideSectionHeader({children}: any) {
  return (
    <div className="chat--header bg-white flex justify-between items-center pl-[20px] pr-[10px] h-[70px] border-b border-[#FDFBFB]">
      {children}
    </div>
  );
}

AsideSectionHeader.Title = Title
