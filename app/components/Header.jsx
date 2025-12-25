"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [user, setUser] = useState(null);
  const [chatStarted, setChatStarted] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <div className={`fixed  top-5 w-full text-white  `}>
    <div className={`flex flex-row justify-between`}>
           <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <div
            data-aos="fade-right"
            className="text-header cursor-pointer mt-5 ml-10 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7220e4] to-[#f55cfe]"
          >
            DTAL.COM
          </div>
        </Link>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-once="true"
        className="flex flex-row Headerr_text gap-10 mt-5 mr-10"
      >
        <div
          className={`Headerr_text transition-all duration-700 ${
            chatStarted ? "ml-50" : "opacity-100"
          }`}
        >
          <Link href="/">
            <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          </Link>

          <Link href="/codex">
            <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
              codex
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          </Link>

          <Link href="/upload">
            <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
              video to text
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          </Link>

          <Link href="/pdf">
            <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
              Speech To PDF
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          </Link>
        </div>
      <Link href="/auth">
        <div className={`px-6 py-1 rounded-[5px] border hover:border flex justify-center items-center hover:border-purple-500 cursor-pointer border-[#1b1c1d] transition-all duration-300 font-200  bg-purple-500 hover:bg-[#1b1c1d]`}>Get Started</div>

      </Link>

      </div>
    </div>
    </div>
  );
};
export default Header;
