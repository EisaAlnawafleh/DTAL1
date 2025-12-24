"use client";
import { useRef } from "react";

export default function SearchBox({ onSend }) {
  const boxRef = useRef(null);

  const handleFocus = () => {
    setTimeout(() => {
      boxRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 250);
  };

  return (
    <div
      ref={boxRef}
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-once="true"
      className="w-full py-4"
    >
      <div className="relative max-w-xl search_bottom2  w-full mx-auto">
        <div className="relative flex flex-col search_bottom2">
          <textarea
            rows={1}
            onFocus={handleFocus}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height =
                Math.min(e.target.scrollHeight, 5 * 24) + "px";
            }}
            className="w-full min-h-[52px] max-h-[120px]
            overflow-hidden scrollbar-hide
            rounded-xl rounded-b-none
            px-4 py-3
            
            search_bottom1
            bg-gradient-to-r from-[#7220e4] to-[#f55cfe]
            text-white placeholder:text-white/70
            border-0 outline-none resize-none
            leading-[1.5]
            text-[16px]
            search_size
          
            "
            placeholder="Search the web..."
          />

          <div className="h-12 bg-gradient-to-r search_bottom1 from-[#7220e4] to-[#f55cfe] rounded-b-xl">
            <div className="absolute left-3 bottom-3 flex items-center gap-2">
              <label className="cursor-pointer bottom3 rounded-lg p-2 bg-white/20 hover:bg-white/15">
                <input className="hidden" type="file" />
                <svg
                className="w-4 h-4 bottom2 text-white"
                  
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </label>

              <button
                className="rounded-full bottom3 flex search_bottom1 items-center gap-2 px-1.5 py-1 border h-8
                bg-sky-500/15 hover:bg-sky-500/20
                border-sky-400 text-sky-500"
                type="button"
              >
                <svg
                  className="text-sky-500 w-4 h-4 bottom2 "
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                 
                >
                  <circle r="10" cy="12" cx="12" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="text-sm pr-3 search_bottom_text">Search</span>
              </button>
            </div>

            <div className="absolute bottom1 right-3 bottom-3">
              <button
                onClick={() => onSend && onSend()}
                className="rounded-lg p-2 bottom3 bg-white/25 hover:bg-white/30 text-white transition-colors"
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
    </div>
  );
}
