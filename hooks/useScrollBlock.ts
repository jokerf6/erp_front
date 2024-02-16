import { useEffect } from "react";
import useScrollBlock from "@/functions/useScrollBlock";

export default function useScrollBlockHook(isOpen: boolean) {
  const [blockScroll, allowScroll] = useScrollBlock();
  // Block/Allow Scrolling when Opening/Closing Overlays
  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpen]);
}
