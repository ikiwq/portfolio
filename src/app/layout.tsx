import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {LocaleContextProvider} from "@/context/locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ikiwq Portfolio",
  description: "My portfolio, where you can find anything you need to know about me.",
  metadataBase: new URL(process.env.PUBLIC_BASE_URL || ""),
  twitter: {
    title: "Ikiwq Portfolio",
    description: "My portfolio, where you can find anything you need to know about me."
  },
  openGraph: {
    title: "Ikiwq Portfolio",
    description: "My portfolio, where you can find anything you need to know about me."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${inter.className} antialiased`}
      >
        <LocaleContextProvider>
          {children}
        </LocaleContextProvider>
      </body>
    </html>
  );
}
