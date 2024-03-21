import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of Kovács Marcell's CV",
};

export default function RootLayout({
  children,
  placeholder,
  skills
  
}: Readonly<{
  children: React.ReactNode;
  placeholder:React.ReactNode;
  skills:React.ReactNode;
  //className={inter.className}
}>) {
  return (
    <html lang="en">
      <body >
      {children}
      <div className="flex bg-slate-600 justify-evenly">
      <div className=" bg-white shadow-md rounded p-4 m-10 text-center flex-auto float-left clear-both w-[50%] max-w-[20%]">
      {placeholder}
      </div>
      <div className="bg-white shadow-md rounded p-4 m-10 text-center flex-auto float-left clear-both w-[10%] max-w-[20%]">
      {skills}
      </div>
      </div>
      </body>
    </html>
  );
}
