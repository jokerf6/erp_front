import React from "react";
import { Icon } from "@iconify/react";

// Components
import Modal from "@/components/default/modal.component";
import AssignedToInput from "@/components/sider/inputs/assignedTo.input.component";
import FormItem from "@/components/sider/SiderForm/FormItem/FormItem.component";
import Sider from "@/components/sider/sider.component";

export default function ScheduleMeetingSider(props: {
  setScheduleOverlay: any;
}) {
  const [files, setFiles] = React.useState<any>([]);
  // Function That When Click it Click input Filed With type File
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  function ClickInputFile() {
    fileInputRef.current?.click();
  }

  return (
    <Modal setOverlay={props.setScheduleOverlay}>
      <Sider>
        <Sider.Header.Add setOverlay={props.setScheduleOverlay}>
          Schedule Meeting
        </Sider.Header.Add>
        <Sider.Form.Container>
          <FormItem>
            <FormItem.LabelPriority>
              <FormItem.Label>Title</FormItem.Label>
              <FormItem.Priority>Required</FormItem.Priority>
            </FormItem.LabelPriority>
            <FormItem.Input type="text" placeholder="Enter Meeting Name" />
          </FormItem>

          <FormItem>
            <FormItem.LabelPriority>
              <FormItem.Label>Data & Time</FormItem.Label>
              <FormItem.Priority>Required</FormItem.Priority>
            </FormItem.LabelPriority>
            <div className="flex gap-4">
              <FormItem.Input type="date" placeholder="Enter Meeting Name" />
              <p className="self-center">To</p>
              <FormItem.Input type="date" placeholder="Enter Meeting Name" />
            </div>
          </FormItem>
          {/* TODO:check box
           ************************* Check Box Here *****************
           */}

          <FormItem>
            <FormItem.LabelPriority>
              <FormItem.Label>Assigned To</FormItem.Label>
              <FormItem.Priority>Required</FormItem.Priority>
            </FormItem.LabelPriority>
            <AssignedToInput />
          </FormItem>

          <FormItem>
            <FormItem.LabelPriority>
              <FormItem.Label>Files</FormItem.Label>
              <FormItem.Priority>Optional</FormItem.Priority>
            </FormItem.LabelPriority>
            <div className="input-5 flex flex-col gap-1">
              <button
                type="button"
                className=" flex justify-between  text-[14px] pr-[10px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-[10px]  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onClick={ClickInputFile}
              >
                <input
                  required
                  ref={fileInputRef}
                  style={{ visibility: "hidden" }}
                  type="file"
                  className=" w-[0px] h-[0px] hidden"
                  id="file"
                  // TODO: fix the error in input file
                  onChange={(e) => {
                    setFiles([...files, e.target.files![0].name]);
                  }}
                  placeholder="Upload files"
                />
                <span>Choose Files</span>
                <Icon icon="subway:pin" className="-rotate-45  text-[14px]" />
              </button>
              <div className="flex flex-col gap-4">
                {files.length > 0 &&
                  files.map((item: any, idx: number) => {
                    return (
                      <div className="part-two flex justify-between items-center">
                        <div className="part-one flex items-center gap-4">
                          <Icon
                            icon={"solar:folder-with-files-linear"}
                            className=" text-4xl"
                          />
                          <p>{item}</p>
                        </div>
                        <Icon
                          icon="lucide:import"
                          className="text-primary-pink w-[21px] h-[21px] cursor-pointer"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </FormItem>

          <FormItem>
            <FormItem.LabelPriority>
              <FormItem.Label>Description</FormItem.Label>
              <FormItem.Priority>Optional</FormItem.Priority>
            </FormItem.LabelPriority>
            <textarea
              className="block text-[14px] pr-[32px] appearance-none w-full placeholder:text-[14px] placeholder:text-[#3F3C3D] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Write task details"
            />
          </FormItem>
        </Sider.Form.Container>
        <Sider.Button>Create</Sider.Button>
      </Sider>
    </Modal>
  );
}
