"use client";
import { useState } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-48 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full h-10 px-4 bg-gradient-to-r from-[#7220e4] to-[#f55cfe] text-white font-bold rounded-lg cursor-pointer"
      >
        Menu
        <div className="flex flex-col justify-between h-4 w-5 relative">
          <span
            className={`block h-[3px] w-full bg-white rounded-full transition-all ${
              isOpen ? "rotate-45 translate-y-[6px]" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-white rounded-full transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-white rounded-full transition-all ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1"
            }`}
          ></span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white text-violet-800 rounded-lg shadow-md overflow-hidden">
          <div className="px-3 py-2 cursor-pointer select-none hover:bg-gray-200 transition">
            Home
          </div>
          <div className="px-3 py-2 cursor-pointer select-none hover:bg-gray-200 transition">
            Codex
          </div>
          <div className="px-3 py-2 cursor-pointer select-none hover:bg-gray-200 transition">
            Video To Text
          </div>
          <div className="px-3 py-2 cursor-pointer select-none hover:bg-gray-200 transition">
            Speech To PDF
          </div>
          <div className="px-3 py-2 cursor-pointer select-none hover:bg-gray-200 transition">
            Login
          </div>
          <div className="px-3 py-2 cursor-pointer select-none hover:bg-gray-200 transition">
            Sign Up
          </div>
        </div>
      )}
    </div>
  );
}
