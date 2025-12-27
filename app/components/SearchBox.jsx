"use client";
import { useRef, useState } from "react";

export default function SearchBox({ onSend }) {
  const boxRef = useRef(null);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setTimeout(() => {
      boxRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 250);
  };

  const canSend = value.trim().length > 0;

  return (
    <div
      ref={boxRef}
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-once="true"
      className="w-full py-6"
    >
      <div className="relative max-w-xl search_bottom2 w-full mx-auto">
        <div className="relative flex flex-col search_bottom2">
          <textarea
            rows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={handleFocus}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height =
                Math.min(e.target.scrollHeight, 5 * 24) + "px";
            }}
            className="w-full min-h-20 max-h-30
            overflow-hidden scrollbar-hide
            rounded-xl 
            px-6 py-6
            search_bottom1
            bg-gradient-to-r from-[#7220e4] to-[#f55cfe]
            text-white placeholder:text-white/70
            border-0 outline-none resize-none
            leading-[1.5]
            text-[16px]
            search_size
            pr-[10%]"
            placeholder="Type your question here !"
          />

          <div className="absolute left-3 bottom-3 flex items-center gap-2" />

          <div className="absolute bottom1 right-2 bottom-6">
            <button
              onClick={() => {
                if (!canSend) return;
                onSend && onSend(value);
                setValue("");
              }}
              className={`rounded-lg p-2 bottom3 bg-white/25 text-white transition-all duration-300
                ${
                  canSend
                    ? "hover:bg-white/30 opacity-100 cursor-pointer"
                    : "opacity-60 pointer-events-none"
                }
              `}
              type="button"
            >
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 bottom2"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
