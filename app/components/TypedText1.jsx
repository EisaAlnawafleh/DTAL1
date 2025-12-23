"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText1() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [" Speech To PDF !"],
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
