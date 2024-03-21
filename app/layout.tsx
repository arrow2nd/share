import type { Metadata } from "next";
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
      </body>
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "d60db2d828c9416da91a42b1b49d41f1"}'
      >
      </script>
    </html>
  );
}
