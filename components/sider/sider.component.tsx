import SiderButton from "./SiderButton.component";
import SiderHeaderAdd from "./SiderHeader/SiderHeaderAdd";
import SiderHeaderEdit from "./SiderHeader/SiderHeaderEdit";
import SiderForm from "./SiderForm/SiderForm.component";
import SiderFormContainer from "./SiderForm/SiderFormContainer.component";

export default function Sider(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-sider-bg-white absolute top-0 right-0 min-h-screen w-screen max-w-[600px] z-[21] flex flex-col cursor-default"
    >
      {children}
    </div>
  );
}

Sider.Button = SiderButton 
Sider.Header = {
  Add: SiderHeaderAdd,
  Edit: SiderHeaderEdit,
}

Sider.Form = SiderForm
Sider.Form.Container = SiderFormContainer
