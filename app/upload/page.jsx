"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
import SearchBox from "../components/SearchBox";
const Upload = () => {
  const [videoSelected, setVideoSelected] = useState(false);

  const [videoPreview, setVideoPreview] = useState(null);

  const [chatStarted, setChatStarted] = useState(false);
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
      className={`   pt-30  min-h-screen
     bg-linear-to-b from-[#0f0f14] via-[#11111a] to-[#0b0b10]
    `}
    >
      <div
        className={`transition-all duration-700 ${
          chatStarted ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          data-aos="fade-up"
          className={`text-center text-[52px] upload_text   text-transparent bg-clip-text   moving-gradient`}
        >
          Transcribe Video to Text Online
        </div>
        <div
          data-aos="fade-up"
          className={`text-center upload_text_1 text-white/60 mt-10`}
        >
          Use our online video to text converter to generate accurate video
          transcripts in minutes.
        </div>
        <div className={`flex justify-center items-center  mt-5 upload_1  `}>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={`  w-[50%] mx-5 py-[2.5%] min-h-full backdrop-blur-3xl
bg-white/5  justify-center items-center flex flex-col gap-10  shadow-[0_20px_60px_rgba(0,0,0,0.4)]
  border border-white/10 rounded-4xl`}
          >
            <div className={`flex  justify-center file_upload`}>
              <Link href="/upload">
                <div
                  // data-aos="zoom-in"
                  // data-aos-delay="400"
                  className={`bg-white/10  hover:scale-95 file_upload text-white border border-white/10
px-4 py-1 rounded-2xl `}
                >
                  <i className="ri-file-line text-[#ae8509] pr-2 text-[13px]"></i>
                 <span className={`text-[13px]`}> File upload</span>
                </div>
              </Link>
            </div>

            <label
              htmlFor="upload"
              className="
           w-[60%]
           py-[4%]
           

            hover:bg-blue-500/20 flex flex-col pt-5 gap-5 items-center
             border-2 border-dashed border-white/20
             bg-blue-500/10 rounded-4xl cursor-pointer"
            >
              {!videoSelected && (
                <>
                  <img
                    data-aos="zoom-in"
                    src="https://www.happyscribe.com/assets/uploader_file_illustration-e5c2f20e.svg"
                    className="w-30 pointer-events-none upload_img"
                  />

                  <div
                    // data-aos="fade-up"
                    className="upload_text_2 text-center justify-center items-center pointer-events-none mx-4 text-white"
                  >
                    Upload your video & get transcript
                  </div>

                 
                </>
              )}
              {videoSelected && (
                <video
                  src={videoPreview}
                  controls
                  className="w-[80%] rounded-xl"
                />
              )}

              <input
                type="file"
                id="upload"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  setVideoSelected(true);
                  setVideoPreview(URL.createObjectURL(file));
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="fixed w-full bottom-[0%]">
        <SearchBox onSend={() => setChatStarted(true)} />
      </div>
    </div>
  );
};

export default Upload;
