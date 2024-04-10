import { Icon } from "@iconify/react";

export default function Arrow(props: { show: boolean; setShow: any }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        props.setShow((prev: boolean) => !prev);
      }}
      className="text-primary-purple p-1"
    >
      {props.show ? (
        <Icon icon="ep:arrow-up-bold" />
      ) : (
        <Icon icon="ep:arrow-down-bold" />
      )}
    </button>
  );
}
