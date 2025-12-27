"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home"); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#1b1c1d]">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <img src="/img.png" alt="Logo" className="w-24 h-24" />
        <p className="text-white text-sm tracking-widest">Welcome to DTAL...</p>
      </div>
    </div>
  );
}
