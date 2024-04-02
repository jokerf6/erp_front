import React, { useContext } from "react";
import { createPortal } from "react-dom";

export default function Modal(props: {
  children: React.ReactNode;
  setOverlay: any;
}) {
  const { children, setOverlay } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      onClick={() => setOverlay(false)}
      className="fixed top-0 right-0 bottom-0 left-0 z-[20] bg-black/[0.5] overflow-y-auto flex items-center justify-center"
    >
      {children}
    </div>,
    document.body
  );
}
