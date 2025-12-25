"use client";
import Link from "next/link";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
const Upload = () => {
  const [link, setLink] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div
      className={`   pt-50 min-h-screen
     bg-linear-to-b from-[#0f0f14] via-[#11111a] to-[#0b0b10]
    `}
    >
      
      <div
        data-aos="fade-up"
        className={`text-center text-[52px] upload_text   text-transparent bg-clip-text   moving-gradient`}
      >
       
        Transcribe Video to Text Online
      </div>
      <div 
      data-aos="fade-up" 
      className={`text-center upload_text_1 text-white/60 mt-2`}>
        Use our online video to text converter to generate accurate video
        transcripts in minutes.
      </div>
      <div className={`flex justify-center items-center mt-10   `}>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={`  w-[70%] mx-5  py-[2%] backdrop-blur-3xl
bg-white/5  justify-center items-center flex flex-col gap-20  shadow-[0_20px_60px_rgba(0,0,0,0.4)]
  border border-white/10 rounded-4xl`}
        >
          <div className={`flex flex-row gap-20 justify-center`}>
            <Link href="/upload">
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className={`bg-white/10 hover:scale-95 text-white border border-white/10
px-4 py-1 rounded-2xl `}
              >
                <i className="ri-file-line text-[#ae8509] pr-2"></i>
                File upload
              </div>
            </Link>
          </div>

          <label
            htmlFor="upload"
            className="h-[248px]
            w-[80%] max-w-[960px]

            hover:bg-blue-500/20 flex flex-col pt-5 gap-5 items-center
             border-2 border-dashed border-white/20
             bg-blue-500/10 rounded-4xl cursor-pointer"
          >
            <img
              data-aos="zoom-in"
              src="https://www.happyscribe.com/assets/uploader_file_illustration-e5c2f20e.svg"
              className="w-30 pointer-events-none upload_img"
            />

            <div 
            data-aos="fade-up"
             className="upload_text_2 pointer-events-none mx-4 text-white">
              Upload your video & get transcript
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-[#004ae5] upload_text_3  py-2 px-7 rounded-3xl justify-center items-center mt-5 flex flex-row gap-3 text-white
               cursor-pointer hover:opacity-75 hover:scale-95
               shadow-[0_12px_35px_rgba(37,99,235,0.35)]

               "
            >
              <i className="ri-download-2-line text-xl upload_text_img_3"></i>
              <div className={`pt-1 `}>Upload a file</div>
            </div>

            <input
              type="file"
              id="upload"
              accept="video/*"
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Upload;
