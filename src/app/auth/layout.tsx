"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <main className="flex flex-1 flex-col lg:flex-row md:flex-row p-2 relative">
      <div className="w-full relative bg-base-100 flex items-center justify-center p-8 lg:w-1/2 md:w-full">
        <Image
          src="/signup-image.jpg"
          alt="Signup Visual"
          fill
          className="max-w-full h-auto clip-custom"
        />
      </div>
      <div className="w-full flex items-center justify-center p-8 lg:w-1/2 md:w-full">
          <div className="grid justify-self-center max-w-md space-y-6 border-primary rounded-2xl border-2 lg:p-6 md:p-3 sm:p-1 lg:w-1/2 md:w-full bg-white">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            {children}
          </div>
      </div>
    </main>
  );
}
