import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Public_Sans } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public_sans",
});

export const metadata: Metadata = {
  title: "Jarvis",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, publicSans.variable, "min-h-screen")}
      >
        {children}
      </body>
    </html>
  );
}
