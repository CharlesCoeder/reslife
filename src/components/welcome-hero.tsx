import React from "react";
import Image from "next/image";

export default function WelcomeHero() {
  return (
    <div className="flex flex-col items-center text-nyit-blue-900 mt-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to NYIT ResLife!</h1>
        <p className="text-xl mb-6">Makers, Doers, Inventors, and Innovators</p>
      </div>
      <div className="relative">
        <Image
          src="/nyit_bear.png"
          alt="NYIT Bear Logo"
          width={160}
          height={160}
        />
      </div>
    </div>
  );
}
