"use client"
import Image from "next/image";
import Link from "next/link";
import { Card } from "./comps/cards";
export default function Home() {
  return(<main>
    <div className="flex bg-slate-600 justify-evenly">
      <div className=" bg-white shadow-md rounded p-4 m-10 text-center flex-auto float-left clear-both w-[10%] max-w-[20%] justify-center items-center">
      <Card list={["Rust","Golang","Python","JS/TS"]} />
      </div>
      <div className="bg-white shadow-md rounded p-4 m-10 text-center flex-auto float-left clear-both w-[10%] max-w-[20%]">
      <Card list={["Backend","Frontend","Database","DevOps"]} />
      </div>
      </div>
  </main>)
  
}
