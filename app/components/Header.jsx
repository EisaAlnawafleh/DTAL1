"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
//  const [chatStarted, setChatStarted] = useState(false);
const [chatStarted] = useState(false);



  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div
      className={`fixed z-50 pb-5 w-full text-white transition-all duration-500 ease-out ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-between">
          <Link href="/home">
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
            <Link href="/home">
              <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
                Home
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Link>

            <Link href="/codex">
              <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
                Codex
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Link>

            <Link href="/upload">
              <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
                Video to Text
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Link>

            <Link href="/pdf">
              <div className="relative inline-block px-6 py-1 font-bold cursor-pointer group hover:opacity-80">
                PDF
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Link>
          </div>

          <Link href="/auth">
            <div className="px-6 py-1 rounded-[5px] border flex justify-center items-center cursor-pointer border-[#1b1c1d] bg-purple-500 hover:bg-[#1b1c1d] hover:border-purple-500 transition-all duration-300">
              Get Started
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
