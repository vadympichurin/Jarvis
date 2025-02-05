"use client";

import Image from "next/image";
import hello from "@/public/hello.svg";

export default function LoginInfoPanel() {
  return (
    <aside className="h-full bg-login-page-background col-span-2 rounded-3xl bg-fixed text-center px-2">
      <div className="h-full flex items-center mx-auto w-fit overflow-hidden">
        <Image src={hello} alt="hello img" className="" />
      </div>
    </aside>
  );
}
