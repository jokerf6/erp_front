import EditItemNum from "./EditItemNum";
import EditItemTitle from "./EditItemTitle";
import EditItemTitleNum from "./EditItemTitleNum";

export default function EditItem({ children }: any) {
  return <div className="flex flex-col gap-4 p-[20px]">{children}</div>;
}

EditItem.TitleNum = EditItemTitleNum;
EditItem.Title = EditItemTitle;
EditItem.Num = EditItemNum;
