import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {LocaleContextProvider} from "@/context/locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const defaultTitle = "Ikiwq Portfolio";
const defaultDescription = "My portfolio, where you can find anything you need to know about me.";


export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(process.env.PUBLIC_BASE_URL ?? ""),
  twitter: {
    title: defaultTitle,
    description: defaultDescription
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-white`}
      >
        <LocaleContextProvider>
          {children}
        </LocaleContextProvider>
      </body>
    </html>
  );
}
