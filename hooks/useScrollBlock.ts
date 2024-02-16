import { useEffect, useRef } from "react";
import useScrollBlock from "@/functions/useScrollBlock";

export default function useScrollBlockHook(isOpen: boolean) {
  const firstRender = useRef(true);
  const [blockScroll, allowScroll] = useScrollBlock();

  // Block/Allow Scrolling when Opening/Closing Overlays
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (isOpen) {
        blockScroll();
      } else {
        allowScroll();
      }
    }
  }, [isOpen]);
}
