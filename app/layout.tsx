import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { site } from "@/libs/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...site,
  metadataBase: new URL("https://" + site.title),
  openGraph: {
    ...site,
    url: "/",
    type: "website",
    siteName: site.title,
    images: [{ url: "/ogp.png" }],
  },
  twitter: {
    ...site,
    card: "summary",
    images: [{ url: "/ogp.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
