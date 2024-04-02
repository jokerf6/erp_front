import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { BiExport } from "react-icons/bi";
export default function Files(props: { files: number }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  function ClickInputFile() {
    fileInputRef.current?.click();
  }
  const [files, setFiles] = useState<any>([]);
  // TODO: fix error in line 30
  /*
    Matt: TypeScript Error, just added type "any"
    changes made in above state (line: 9):
    - useState([]); ----> useState<any>([]);
  */
  return (
    <div className="file-content flex flex-col gap-4 p-[20px]">
      <div className="part-one flex justify-between">
        <div className=" flex gap-2 justify-center items-center">
          <p className="text-sider-primary-text font-bold text-[20px]">Files</p>
          <p className="bg-sider-number-bg text-sider-number-text rounded-full flex justify-center items-center min-w-[25px] h-[25px] font-[500] px-2">{props.files}</p>
        </div>
        <button
          className="rounded-[5px] outline-none w-fit flex justify-between items-center"
          onClick={ClickInputFile}
        >
          <input
            required
            ref={fileInputRef}
            style={{ visibility: "hidden" }}
            type="file"
            className="  w-[0px]"
            id="file"
            onChange={(e) => {
            setFiles([...files, e.target.files![0].name]);
            }}
            placeholder="Upload files"
          />
          <BiExport className="text-primary-pink w-[40px] h-[21px] cursor-pointer" />
        </button>
      </div>
      <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[120px] scroll-m-2 bg-[#FFFFFF]">
        {files.length === 0 &&
          <div className="flex flex-col items-center cursor-pointer" onClick={ClickInputFile}>
            <div className="">
              <img src="/images/upload logo.png" alt="Photo" className=" w-12 h-12"/>
            </div>
            <p>Tap to upload new File</p>
          </div>}

        {files.length > 0 &&
          files.map((item: any, idx: number) => {
            return (
              <div className="part-two flex justify-between items-center ">
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
  );
}
