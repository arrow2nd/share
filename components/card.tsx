import { HtmlHTMLAttributes } from "react";

export default function Card(
  { children, ...props }: HtmlHTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className={`w-full max-w-lg p-8 bg-white shadow-lg rounded-xl ${props.className}`}
    >
      {children}
    </div>
  );
}
