import React from "react";
import { headerData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-[999]">
      <nav className="bg-slate-200 fixed top-0 left-1/2 -translate-x-1/2 py-4">
        <ul className="flex w-[28rem] justify-between items-center flex-wrap bg-nyit-orange rounded-full px-5 py-2">
          <Image
            src="/nyit_logo2.png"
            width={24}
            height={24}
            alt="NYIT logo"
            quality={95}
          />
          {headerData.map((item) => (
            <li key={item.name}>
              <Link className="text-nyit-blue-900" href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
