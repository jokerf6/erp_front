import { useEffect, useState } from "react";

export default function getWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>();
  const [isSmallWindow, setIsSmallWindow] = useState<boolean>();

  // Update windowWidth
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function windowTrackerWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", windowTrackerWidth);

    return function () {
      window.removeEventListener("resize", windowTrackerWidth);
    };
  }, [windowWidth]);

  // Update isSmallWindow
  useEffect(() => {
    setIsSmallWindow(window.innerWidth < 1024 ? true : false);
  }, [windowWidth]);

  return {windowWidth, isSmallWindow}
}