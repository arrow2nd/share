import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ServiceButton({ selected = false, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-full px-4 py-1 transition-colors",
        selected
          ? "bg-slate-600 text-white dark:bg-cyan-800"
          : "bg-neutral-100 text-neutral-600 hover:bg-slate-600 hover:text-white dark:bg-slate-700 dark:text-neutral-400 dark:hover:bg-cyan-700",
        props.className
      )}
    >
      {props?.children}
    </button>
  );
}
