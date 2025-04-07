import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {LocaleContextProvider} from "@/context/locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ikiwq portfolio",
  description: "The ikiwq portfolio",
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
