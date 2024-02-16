import { useContext, useEffect, useRef, useState } from "react";

import Image from "next/image";

// Context
import { MyTasksContext } from "@/pages/home/pm/mytasks";

export default function Images(props: {
  images: string[];
  taskID: any;
  categoryID: any;
}) {
  const { images, taskID, categoryID } = props;
  const { handleImageSliderOverlay } = useContext(MyTasksContext);

  const imageContainerRef = useRef<any>();
  const imageRefs = useRef<any>([]);
  const [lastVisibleImageIndex, setLastVisibleImageIndex] = useState(0);
  const [count, setCount] = useState(0);

  // Update More Images Overlay
  useEffect(() => {
    setCount(0);
    setLastVisibleImageIndex(0);

    images.map((_, index) => {
      if (
        imageRefs.current[index].offsetTop ===
        imageContainerRef.current.offsetTop
      ) {
        setLastVisibleImageIndex(index);
      } else {
        setCount((prev: number) => prev + 1);
      }
    });
  }, [imageContainerRef.current?.offsetWidth, images]);

  return (
    <>
      <div
        ref={imageContainerRef}
        className=" w-full h-32 flex flex-wrap gap-2 overflow-hidden"
      >
        {images.map((image, index) => {
          return (
            <div
              key={`${taskID}-${index}`}
              ref={(element) => (imageRefs.current[index] = element)}
              className="relative flex-1 basis-[100px] xxs:basis-[130px] xs:basis-[150px] h-full cursor-pointer"
              onClick={() => handleImageSliderOverlay(categoryID, taskID, index)}
            >
              <Image
                src={image}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full rounded-md object-cover"
              />
              {lastVisibleImageIndex == index && count && (
                <div className="bg-black/70 absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-md cursor-pointer">
                  <span className="text-white2 text-2xl font-medium">
                    +{count}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
