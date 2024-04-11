"use client";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./comps/cards";
import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://127.0.0.1:8080/session", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() =>
        fetch("http://127.0.0.1:8080/anticsrf", {
          method: "GET",
          credentials: "include",
          mode: "cors",
          cache: "no-store",
        })
      )
      .then((response) => response.json())
      .then((data) => console.log(data)).then(()=>fetch("http://127.0.0.1:8080/rest", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        cache: "no-store",
      }).then((i)=>(i.json().then((i)=>(console.log(i))))));
  }, []);
  return (
    <main>
      <div className="flex bg-slate-600 justify-evenly">
        <div className=" bg-white shadow-md rounded p-4 m-10 text-center flex-auto float-left clear-both w-[10%] max-w-[20%] justify-center items-center">
          <Card list={["Rust", "Golang", "Python", "JS/TS"]} />
        </div>
        <div className="bg-white shadow-md rounded p-4 m-10 text-center flex-auto float-left clear-both w-[10%] max-w-[20%]">
          <Card list={["Backend", "Frontend", "Database", "DevOps"]} />
        </div>
      </div>
    </main>
  );
}
