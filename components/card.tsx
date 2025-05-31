import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge(
        "w-full max-w-lg rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800",
        props.className
      )}
    >
      {children}
    </div>
  );
}
