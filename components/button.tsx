import { ButtonHTMLAttributes } from "react";

type Props = {
  secondary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ secondary = false, ...props }: Props) {
  return (
    <button
      {...props}
      className={`${
        secondary
          ? "bg-white border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 disabled:border-neutral-200 disabled:text-neutral-200"
          : "bg-blue-500 hover:bg-blue-600 text-white disabled:bg-neutral-200 "
      } text-sm sm:text-base rounded-full px-5 py-2 cursor-pointer transition-colors`}
    >
      {props.children}
    </button>
  );
}
