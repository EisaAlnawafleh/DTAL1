"use client";

import Link from "next/link";
import { useState } from "react";
import jsPDF from "jspdf";
import TypedText1 from "../components/TypedText1";
import Header from "../components/Header";

const Pdf = () => {
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
    <div className="bg-[#0b0b10] w-screen h-screen pt-50 text-white flex flex-col">
     

      <div className="text-center text-[48px]">
        <TypedText1 />
      </div>

      <div className="flex justify-center text-[30px] mt-20">
        SPEECH TO PDF Converter
      </div>

      <div className="flex justify-center items-center mt-10 flex-col px-10">
        <div className="text-center max-w-[900px]">
          Convert your speech into polished PDF documents quickly and accurately
          using our AI-powered speech-to-text tool.
        </div>

        <textarea
          placeholder="Your text will appear here ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
          text-white
            focus:outline-none
            focus:border-dashed
            focus:border-[#868d8e]
            border
            border-[#e3e5e9]
            w-[1021px]
            h-[248px]
            mt-10
            resize-none
            p-4
          "
        ></textarea>

        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={startSpeech}
            className="
              bg-black text-white
              px-6 py-3
              rounded-full
              font-medium
             
              hover:bg-neutral-800
              active:scale-95
              transition-all duration-500 hover:scale-95 ease-out
            "
          >
            Start Speech
          </button>

          <button
            onClick={downloadPDF}
            className="
              
              font-medium
           
              hover:underline
              underline-offset-4
              transition-all duration-500 hover:scale-95 ease-out
            "
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
