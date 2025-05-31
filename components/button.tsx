import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  secondary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ secondary = false, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        "cursor-pointer rounded-full px-5 py-2 text-sm transition-colors sm:text-base",
        secondary
          ? "border border-slate-600 bg-white text-slate-600 hover:border-slate-700 hover:bg-slate-100 dark:border-slate-400 dark:bg-gray-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-gray-900"
          : "bg-slate-600 text-white hover:bg-slate-700 disabled:bg-neutral-200 dark:bg-cyan-800 dark:hover:bg-cyan-900 dark:disabled:bg-slate-700 disabled:dark:opacity-40",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
