"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import TypedText1 from "../components/TypedText1";
import SearchBox from "../components/SearchBox";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Pdf = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  const [chatStarted, setChatStarted] = useState(false);
  const [text, setText] = useState("");

  // const startSpeech = () => {
  //   const SpeechRecognition =
  //     window.SpeechRecognition || window.webkitSpeechRecognition;

  //   if (!SpeechRecognition) {
  //     alert("Speech Recognition is not supported in this browser");
  //     return;
  //   }

  //   const recognition = new SpeechRecognition();
  //   recognition.lang = "en-US";
  //   recognition.continuous = true;

  //   recognition.onresult = (event) => {
  //     let finalText = "";
  //     for (let i = event.resultIndex; i < event.results.length; i++) {
  //       finalText += event.results[i][0].transcript;
  //     }
  //     setText((prev) => prev + " " + finalText);
  //   };

  //   recognition.start();
  // };

  const downloadPDF = () => {
    if (!text.trim()) {
      alert("No text to download");
      return;
    }

    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("speech-to-pdf.pdf");
  };

  return (
    <>
      <div
        className="
  bg-[#101019]
  w-screen
  min-h-screen
  pt-40
  
  sm:pb-[180px]
  md:pb-[200px]
  text-white
  flex
  flex-col
"
      >
        <div
          className={`transition-all duration-700 ${
            chatStarted
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <div className="text-center text-[48px] pdf_text">
            <TypedText1 />
          </div>
          <div className="flex items-center justify-center  mt-15 ">
            <button
              data-aos="fade-right"
              onClick={downloadPDF}
              className="
    group
    relative

    px-6 py-3
    sm:px-7 sm:py-3
    md:px-8 md:py-3.5

    text-[15px]
    sm:text-[16px]
    md:text-[18px]

    font-medium
    text-white
    rounded-full

    bg-gradient-to-r
    from-[#7c2ae8]
    via-[#9b4dff]
    to-[#ff5cf7]

    shadow-[0_0_20px_rgba(155,77,255,0.45)]
    md:shadow-[0_0_25px_rgba(155,77,255,0.5)]

    transition-all
    duration-500

    hover:scale-[0.96]
    hover:shadow-[0_0_45px_rgba(255,92,247,0.6)]
    active:scale-95
  "
            >
              <span className="relative z-10 flex items-center gap-2">
                Download PDF
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="
        w-4 h-4
        sm:w-5 sm:h-5
        transition-transform
        duration-300
        group-hover:translate-y-[2px]
      "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex justify-center items-center pdf_text_2 mt-15 flex-col px-6">
            <div
           
              className="
              
              w-full
              max-w-[900px]
              sm:w-[90%]
              md:w-[80%]
              lg:w-[60%]
              backdrop-blur-xl
              bg-white/5
              border border-white/10
              rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              p-4
            "
            >
              <textarea
               
                placeholder="Your text will appear here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                className="
    w-full
    text-[20px]
    bg-transparent
    text-white
    resize-none
    outline-none
    placeholder:text-white/40
    leading-relaxed

    overflow-y-auto
    max-h-[120px]
    scrollbar-none
  "
              />
            </div>
          </div>
        </div>

        <div className="fixed w-full bottom-0">
          <SearchBox onSend={() => setChatStarted(true)} />
        </div>
      </div>
    </>
  );
};

export default Pdf;
