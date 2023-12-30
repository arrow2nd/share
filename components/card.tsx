import { HtmlHTMLAttributes } from "react";

export default function Card({ children }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-xl">
      {children}
    </div>
  );
}
