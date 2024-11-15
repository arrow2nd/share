import { ButtonHTMLAttributes } from "react";

type Props = {
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ServiceButton({ selected = false, ...props }: Props) {
  return (
    <button
      {...props}
      className={`rounded-full px-4 py-1 transition-colors ${
        selected
          ? "bg-blue-500 text-white"
          : "bg-neutral-100 text-neutral-600 hover:bg-blue-500 hover:text-white"
      }`}
    >
      {props?.children}
    </button>
  );
}
