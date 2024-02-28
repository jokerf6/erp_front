import Image from "next/image";
import { Icon } from "@iconify/react";

import useScrollBlockHook from "@/hooks/useScrollBlock";

import Modal from "@/components/default/modal.component";
import { useEffect } from "react";

export default function ImageSlider(props: {
  setImageSliderOverlay: any;
  imageSlider: any;
  selectedSliderImage: any;
  setSelectedSliderImage: any;
}) {
  const {
    setImageSliderOverlay,
    imageSlider,
    selectedSliderImage,
    setSelectedSliderImage,
  } = props;

  function handleNextImage() {
    setSelectedSliderImage((index: number) => {
      return index === imageSlider.length - 1 ? 0 : index + 1;
    });
  }

  function handlePrevImage() {
    setSelectedSliderImage((index: number) => {
      return index === 0 ? imageSlider.length - 1 : index - 1;
    });
  }
  return (
    <Modal setOverlay={setImageSliderOverlay}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col bg-lite-purple pt-8 px-2 rounded-sm mx-2 w-full xs:max-w-[500px] md:max-w-[700px] select-none"
      >
        <button
          className="p-1 absolute top-0 right-0 z-[100]"
          onClick={() => {
            setImageSliderOverlay(false);
          }}
        >
          <Icon
            icon="carbon:close-filled"
            className="stroke-black stroke-1 text-red-500 text-2xl"
          />
        </button>
        <div className="w-full relative">
          <Image
            src={imageSlider[selectedSliderImage]}
            alt="Focused Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full max-h-[70vh] rounded pb-3"
          />
          <button
            onClick={handlePrevImage}
            className="cursor-pointer absolute top-0 bottom-0 left-2"
          >
            <Icon
              icon="solar:round-arrow-left-bold"
              className="text-2xl text-white stroke-1 stroke-black"
            />
          </button>
          <button
            onClick={handleNextImage}
            className="cursor-pointer absolute top-0 bottom-0 right-2"
          >
            <Icon
              icon="solar:round-arrow-right-bold"
              className="text-2xl text-white stroke-1 stroke-black"
            />
          </button>
        </div>
        <hr className="border-black" />
        <div className="container grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-2 py-4 mx-auto">
          {imageSlider.map((image: any, index: number) => {
            return (
              <button key={index} onClick={() => setSelectedSliderImage(index)}>
                <Image
                  src={image}
                  alt={`Image-${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-full h-full rounded ${
                    selectedSliderImage === index &&
                    "outline outline-3 outline-main3"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
