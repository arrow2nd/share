import { HtmlHTMLAttributes } from "react";

export default function Card({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`w-full max-w-lg rounded-xl bg-white p-8 shadow-lg ${props.className}`}
    >
      {children}
    </div>
  );
}
