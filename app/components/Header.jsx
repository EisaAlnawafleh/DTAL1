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
        className="flex flex-row gap-10 mt-5 mr-10"
      >
        <div
          className={`transition-all duration-700 ${
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

        {user ? (
          <div className="flex items-center gap-4">
            <span className="opacity-80">Hi, {user.name}</span>

            <img
              src={user.avatar || "/img/default-avatar.png"}
              className="w-9 h-9 rounded-full border border-purple-500"
              alt="avatar"
            />

            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setUser(null);
              }}
              className="border px-4 py-1 rounded-lg hover:opacity-80"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <div className=" cursor-pointer bg-linear-to-r border border-[#7220e4] from-[#7220e4] to-[#f55cfe] px-6 py-1 hover:bg-none hover:border-[#7220e4] rounded-[7px] transition-all duration-500 hover:scale-95 ease-out hover:border hover:opacity-80">
              <Link href="/login">Login</Link>
            </div>
            <div className="cursor-pointer hover:opacity-80 hover:bg-linear-to-r transition-all duration-500 hover:scale-95 ease-out from-[#7220e4] to-[#f55cfe] border-[#7220e4] border px-6 py-1 rounded-[7px]">
              <Link href="/sign">Sign Up</Link>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};
export default Header;
