import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { BiExport } from "react-icons/bi";
import Image from "next/image";
import { MEDIA } from "@/secrets";
import { CheckFileType } from "@/utils/fileType";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTaskFileRequest } from "@/services/addTaskFile";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
export default function Files(props: { files: any; id: string }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  function ClickInputFile() {
    fileInputRef.current?.click();
  }
  // TODO: fix error in line 30
  /*
    Matt: TypeScript Error, just added type "any"
    changes made in above state (line: 9):
    - useState([]); ----> useState<any>([]);
  */
  const notify = async (error: string) => toast.error(error);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (e: any) => {
      return AddTaskFileRequest(e, notify, props.id, getCookie("AccessToken")!);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTasks"] });
      queryClient.invalidateQueries({ queryKey: ["getTaskId"] });
    },
  });
  return (
    <div className="file-content flex flex-col gap-4 p-[20px]">
      <div className="part-one flex justify-between">
        <div className=" flex gap-2 justify-center items-center">
          <p className="text-sider-primary-text font-bold text-[20px]">Files</p>
          <p className="bg-sider-number-bg text-sider-number-text rounded-full flex justify-center items-center min-w-[25px] h-[25px] font-[500] px-2">
            {props.files.length}
          </p>
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
              mutation.mutate(e.target.files![0]);
            }}
            placeholder="Upload files"
          />
          <BiExport className="text-primary-pink w-[40px] h-[21px] cursor-pointer" />
        </button>
      </div>
      <div className="files-contents flex flex-col gap-4 border-2 border-[#E7E7E7] rounded-[12px] p-5 overflow-auto max-h-[120px] scroll-m-2 bg-[#FFFFFF]">
        {props.files.length === 0 && (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={ClickInputFile}
          >
            <div className="">
              <img
                src="/images/upload logo.png"
                alt="Photo"
                className=" w-12 h-12"
              />
            </div>
            <p>Tap to upload new File</p>
          </div>
        )}

        {props.files.length > 0 &&
          props.files.map((item: any, idx: number) => {
            return (
              <div className="part-two flex justify-between items-center ">
                <div className="part-one flex items-center gap-4">
                  <Image
                    src={
                      CheckFileType(item.name) === "image"
                        ? MEDIA + item["file"]
                        : CheckFileType(item.name) === "video"
                        ? "/images/defaultVideo.png"
                        : "/images/defultFile.png"
                    }
                    alt="image"
                    width={38}
                    height={38}
                  />

                  <p>{item.name}</p>
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
