import { ButtonHTMLAttributes } from "react";

type Props = {
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ServiceButton({ selected = false, ...props }: Props) {
  return (
    <button
      {...props}
      className={`px-4 py-1 rounded-full focus:outline-none transition-colors ${
        selected
          ? "text-white bg-blue-500"
          : "text-neutral-600 hover:text-white bg-neutral-100 hover:bg-blue-500"
      }`}
    >
      {props?.children}
    </button>
  );
}
