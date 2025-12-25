"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Codex — Write, edit, and understand code with AI.",
        "Video to Text — Convert videos into accurate text in seconds.",
        "Speech to PDF — Turn audio recordings into clean PDF files.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#7220e4] to-[#f55cfe]">
      <span ref={textRef}></span>
    </div>
  );
}
