"use client";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";

const Upload = () => {
  const [videos, setVideos] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const newVideos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setVideos((prev) => [...prev, ...newVideos]);
  };

  const removeVideo = (index) => {
    setVideos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="pt-24 min-h-screen bg-linear-to-b from-[#0f0f14] via-[#11111a] to-[#0b0b10]">
      <div
        className={`transition-all duration-700 ${
          chatStarted ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="text-center text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] text-transparent bg-clip-text moving-gradient">
          Transcribe Video to Text Online
        </h1>

        <p className="text-center text-white/60 mt-6 text-sm sm:text-base">
          Upload one or multiple videos and get accurate transcripts
        </p>

        <div className="flex justify-center items-center mt-10 px-3">
          <div
            className="
              w-full
              sm:w-[95%]
              md:w-[80%]
              lg:w-[60%]
              xl:w-[55%]
              py-8
              backdrop-blur-3xl
              bg-white/5
              flex
              flex-col
              gap-6
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              border
              border-white/10
              rounded-3xl
            "
          >
            <div className="flex justify-center">
              <label
                htmlFor="upload"
                className="cursor-pointer bg-blue-500/20 hover:bg-blue-500/30 text-white px-6 py-2 rounded-xl border border-white/10 text-sm"
              >
                Start transcription
              </label>
            </div>

            <label
              htmlFor="upload"
              className="
                w-[95%]
                mx-auto
                py-6
                flex
                flex-col
                items-center
                gap-4
                border-2
                border-dashed
                border-white/20
                bg-blue-500/10
                rounded-3xl
                cursor-pointer
              "
            >
              {videos.length === 0 && (
                <>
                  <img
                    src="https://www.happyscribe.com/assets/uploader_file_illustration-e5c2f20e.svg"
                    className="w-24 sm:w-28"
                    alt="upload"
                  />
                  <p className="text-white/80 text-sm sm:text-base text-center">
                    Drag & drop your videos here
                  </p>
                  <p className="text-white/40 text-xs">
                    Supports video & audio files
                  </p>
                </>
              )}

              {videos.length > 0 && (
                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    xl:grid-cols-4
                    gap-4
                    w-full
                    px-2
                  "
                >
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="relative bg-black/40 p-2 rounded-xl border border-white/10"
                    >
                      <video
                        src={video.preview}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-xs text-white/60 mt-1 truncate">
                        {video.file.name}
                      </p>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeVideo(index);
                        }}
                        className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-500 text-white text-xs rounded-full px-2"
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  <div className="flex items-center justify-center border-2 border-dashed border-white/30 rounded-xl h-32 text-white/70">
                    + Add more
                  </div>
                </div>
              )}

              <input
                type="file"
                id="upload"
                accept="video/*,audio/*"
                multiple
                className="hidden"
                onChange={handleUpload}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="fixed w-full bottom-0">
        <SearchBox onSend={() => setChatStarted(true)} />
      </div>
    </div>
  );
};

export default Upload;
