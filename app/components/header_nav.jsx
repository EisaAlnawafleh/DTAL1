"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      {/* ===== Navbar Bar (NOT fixed, NOT h-screen) ===== */}
      <nav className="  fixed w-full  px-2 top-4  text-white flex items-center justify-between   z-50">
        {/* Logo */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#7220e4] to-[#f55cfe] font-bold">
          DTAL.COM
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`
    relative 
    w-7 h-9 sm:w-8 sm:h-10 
    md:w-9 md:h-11
    flex flex-col items-center justify-center
    gap-2 sm:gap-2.5
    transition-transform duration-500
    ${open ? "rotate-180" : ""}
  `}
        >
          <span
            className={`
      block rounded bg-purple-400
      h-[3px] sm:h-1
      transition-all duration-500
      ${open ? "absolute top-1/2 w-full rotate-45 -translate-y-1/2" : "w-[70%]"}
    `}
          />
          <span
            className={`
      block rounded bg-purple-400
      h-[3px] sm:h-1 w-full
      transition-all duration-500
      ${open ? "scale-x-0" : ""}
    `}
          />
          <span
            className={`
      block rounded bg-purple-400
      h-[3px] sm:h-1
      transition-all duration-500
      ${
        open ? "absolute top-1/2 w-full -rotate-45 -translate-y-1/2" : "w-[70%]"
      }
    `}
          />
        </button>
      </nav>

      {/* ===== Overlay ===== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-[9998]"
        />
      )}

      {/* ===== Side Menu ===== */}
      {open && (
        <div
          data-aos="fade-right"
          className="
            fixed top-0 left-0
            h-screen w-[80%] max-w-[300px]
            bg-[#111] text-white
            p-4 shadow-2xl
            z-[9999]
            rounded-r-xl
          "
        >
          <Link href="/">
            <div className="text-transparent px-3 py-2  bg-clip-text bg-gradient-to-r from-[#7220e4] to-[#f55cfe] font-bold">
              DTAL.COM
            </div>
          </Link>
<div className={`flex flex-col justify-between h-full`}>


          <div className="flex flex-col  gap-3 pt-6">
            <Link href="/">
              <div className="bg-[#1b1c1d] px-3 py-2 rounded-xl">Home</div>
            </Link>
            <Link href="/codex">
              <div className="hover:text-purple-400 px-3 py-2">Codex</div>
            </Link>
            <Link href="/upload">
              <div className="hover:text-purple-400 px-3 py-2">
                Video to text
              </div>
            </Link>
            <Link href="/pdf">
              <div className="hover:text-purple-400 px-3 py-2">
                Speech To PDF
              </div>
            </Link>
          </div>
          <Link href="/auth">
            <div className=" mb-[20%]  justify-center items-center flex flex-col flex-1  gap-2 border w-[80%] text-center py-1 rounded-[5px] cursor-pointer transition-all duration-300]">
              Get Started
            </div>
          </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
