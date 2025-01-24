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
          ? "border border-blue-500 bg-white text-blue-500 hover:border-blue-600 hover:text-blue-600 disabled:border-neutral-200 disabled:text-neutral-200 dark:bg-gray-800"
          : "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-neutral-200"
      } cursor-pointer rounded-full px-5 py-2 text-sm transition-colors sm:text-base`}
    >
      {props.children}
    </button>
  );
}
