"use client";

import Link from "next/link";
import { useState } from "react";
import jsPDF from "jspdf";
import TypedText1 from "../components/TypedText1";
import SearchBox from "../components/SearchBox";

const Pdf = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [text, setText] = useState("");

  const startSpeech = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let finalText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalText += event.results[i][0].transcript;
      }
      setText((prev) => prev + " " + finalText);
    };

    recognition.start();
  };

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
          chatStarted ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-center text-[48px] pdf_text">
          <TypedText1 />
        </div>
        <div className="flex items-center justify-center  mt-15 ">
          <button
            onClick={downloadPDF}
            className="
            text-[20px]
                hover:underline
                underline-offset-4
                transition-all duration-500 hover:scale-95
              "
          >
            Download PDF
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
  );
};

export default Pdf;
