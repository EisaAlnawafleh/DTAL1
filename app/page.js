"use client";
import Link from "next/link";
import SearchBox from "./components/SearchBox";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedText from "./components/TypedText";
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div className=" text-white  h-screen w-full pt-30">
      {mounted && (
        <div
          className={`transition-all duration-700 ${
            chatStarted
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <Snowfall />
        </div>
      )}

      <div
        className={`transition-all duration-700 ${
          chatStarted ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          data-aos="fade-down"
          className="Header-text home_text moving-gradient flex justify-center items-center text-5xl mt-20"
        >
          <TypedText />
        </div>

        <div className="relative flex justify-center flex-col items-center">
          <Image
            data-aos="fade-down"
            src="/img/Digital.png"
            alt="DTAL Logo"
            width={200}
            height={200}
            className="home_icon"
          />

          <div className="Header-icon-text text-center absolute bottom-0">
            <div data-aos="fade-up" className="home_text_body text-3xl">
              DTAL
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="home_text_body text-transparent bg-clip-text bg-linear-to-r from-[#7220e4] to-[#f55cfe]"
            >
              Digital TASK AI
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-delay="300"
          className="home_text_body_1 mt-10 max-w-[600px] text-center px-4 mx-auto flex flex-wrap justify-center gap-1.5"
        >
          <span>Work smarter with</span>
          <span className="underline underline-offset-4 cursor-pointer">
            AI tools
          </span>
          <span>that code for you,</span>
          <span className="underline underline-offset-4 cursor-pointer">
            transcribe your videos
          </span>
          <span>, and</span>
          <span className="underline underline-offset-4 cursor-pointer">
            turn your speech into polished PDF documents
          </span>
          .
        </div>
      </div>

      <div className="fixed w-full bottom-20">
        <SearchBox onSend={() => setChatStarted(true)} />
      </div>
    </div>
  );
}
