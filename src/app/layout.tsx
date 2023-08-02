import "./globals.css";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sol Nascente n.° 362",
  description: "Página Oficial do nosso Capítulo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
