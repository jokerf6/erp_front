import React from "react";

export default function Images(props: { images: any; setOverlay: any }) {
  const { images, setOverlay } = props;
  return (
    <div className=" w-full">
      {images.length === 1 ? (
        <img src="/images/loginPage.jpg" className="w-full h-32 rounded-md" />
      ) : (
        <div className=" w-full gap-2 rounded-md flex ">
          <img src="/images/loginPage.jpg" className=" w-1/2 rounded-md" />
          <div className="rounded-md w-1/2 relative">
            <div
              onClick={() => setOverlay(true)}
              className=" rounded-md cursor-pointer text-white items-center justify-center flex text-2xl w-full h-full bg-black bg-opacity-50 absolute top-0"
            >
              +{images.length - 1}
            </div>
            <img
              src="/images/loginPage.jpg"
              className=" rounded-md w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
