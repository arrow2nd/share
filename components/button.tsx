import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded-full px-5 py-2 cursor-pointer disabled:bg-neutral-100 transition-colors"
    >
      {props.children}
    </button>
  );
}
