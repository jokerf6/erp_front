import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { BiExport } from "react-icons/bi";
export default function Files() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  function ClickInputFile() {
    fileInputRef.current?.click();
  }
  const [files, setFiles] = useState(["requirments.rar"]);
  return (
    <div className="file-content flex flex-col gap-4">
      <div className="part-one flex justify-between">
        <div className=" flex gap-2  justify-center items-center">
          <p className="text-[#0D062D] font-bold">Files</p>
          <p className="bg-[#F2EBFE] text-[#251B37] rounded-full flex justify-center items-center w-[20px] h-[20px]">
            4
          </p>
        </div>
        <button
          className="rounded-[5px]   w-fit    flex justify-between items-center"
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
          <BiExport className="text-[#FF375E] w-[40px] h-[21px] cursor-pointer" />

          {/* <Icon icon="subway:pin" className="-rotate-45 mr-[5px]" /> */}
        </button>
      </div>
      <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[120px] scroll-m-2 bg-[#FFFFFF]">
        {files.length === 0 && <div>This task don't have files</div>}

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
                  className="text-[#FF375E] w-[21px] h-[21px]"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
