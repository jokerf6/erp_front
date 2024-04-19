import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function UploadFiles(props: { setAddTaskForm?: any }) {
  const [files, setFiles] = useState<any>([]);

  // Function That When Click it Click input Filed With type File
  const fileInputRef = useRef<HTMLInputElement>(null);
  function ClickInputFile() {
    fileInputRef.current?.click();
  }

  useEffect(() => {
    props.setAddTaskForm((prevForm: any) => {
      return {
        ...prevForm,
        files: files,
      };
    });
  }, [files]);

  return (
    <>
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
          onChange={(e) => {
            setFiles([...files, e.target.files![0]]);
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
              <div
                key={idx}
                className="part-two flex justify-between items-center"
              >
                <div className="part-one flex items-center gap-4">
                  <Icon
                    icon={"solar:folder-with-files-linear"}
                    className=" text-4xl"
                  />
                  <p>{item?.name}</p>
                </div>
                <Icon
                  icon="lucide:import"
                  className="text-primary-pink w-[21px] h-[21px] cursor-pointer"
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
