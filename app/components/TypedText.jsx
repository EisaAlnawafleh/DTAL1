"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [" Welcome! What Would You Like To Do Today?"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: false,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={textRef}></span>
    </div>
  );
}
