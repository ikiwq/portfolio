import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page not found",
};

export default function NotFound() {
  return (
    <div
      className={`
      bg-gradient-to-br from-indigo-600 from-0% via-black to-purple-600 to-100%
      w-screen h-screen flex flex-col items-center justify-center 
      bg-[length:400%_400%] animate-gradient
    `}
    >
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>
    </div>
  );
}
