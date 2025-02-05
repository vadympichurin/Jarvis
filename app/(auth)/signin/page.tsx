"use client";

import Image from "next/image";
import logo from "@/public/Logo-Jarvis.svg";
import { SigninForm } from "@/components/SiginForm/SigninForm";

export default function SignIn() {
  return (
    <section className="space-y-4 flex flex-col justify-center items-center h-full mx-auto px-4 ">
      <Image
        width={150}
        src={logo}
        alt="Jarvis logo"
        className="px-3 cursor-pointer mb-3"
      />
      <h5 className="text-neutral-900 text-center font-sans font-bold text-2xl leading-8 tracking-tight mb-1">
        Zum Fortfahren einloggen
      </h5>
      <p className="text-[var(--color-zinc-600)] text-sm text-center max-w-full">
        Willkommen zurück! Bitte geben Sie Ihre Daten ein.
      </p>
      <SigninForm />
    </section>
  );
}
