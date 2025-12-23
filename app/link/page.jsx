// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useTheme } from "../components/color";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Links = () => {
//   const { current } = useTheme();
//   const [link, setLink] = useState("");
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//       mirror: false,
//     });
//   }, []);

//   return (
//     <div
//       className="
//         relative h-screen
//         bg-gradient-to-b from-[#0f0f14] via-[#11111a] to-[#0b0b10]
//         text-white
//       "
//     >
//       <Link href="/Home">
//         <img
//           data-aos="fade-down"
//           data-aos-duration="500"
//           data-aos-easing="ease-out"
//           data-aos-once="true"
//           src="img/Digital.png"
//           className="w-50 absolute top-0 opacity-75 hover:opacity-100 transition"
//         />
//       </Link>

//       <div
//         data-aos="fade-up"
//         className="
//           text-center text-[52px] pt-28
//           text-transparent bg-clip-text moving-gradient
//         "
//       >
//         Transcribe Video to Text Online
//       </div>

//       <div data-aos="fade-up" className="text-center text-white/60 mt-2">
//         Use our online video to text converter to generate accurate video
//         transcripts in minutes.
//       </div>

//       <div className="flex justify-center items-center mt-14">
//         <div
//           data-aos="fade-up"
//           data-aos-delay="200"
//           className="
//             h-[490px] w-[998px]
//             flex flex-col gap-20 items-center
//             rounded-4xl
//             border border-white/10
//             bg-white/5
//             backdrop-blur-3xl
//             shadow-[0_20px_60px_rgba(0,0,0,0.4)]
//           "
//         >
//           <div className="flex gap-20 justify-center mt-10">
//             <Link href="/upload">
//               <div
//                 data-aos="zoom-in"
//                 className="
//                   bg-white/10 text-white border border-white/10
//                   px-4 py-1 rounded-2xl
//                 "
//               >
//                 <i className="ri-file-line text-[#ae8509] pr-2"></i>
//                 File upload
//               </div>
//             </Link>

//             <Link href="/link">
//               <div
//                 data-aos="zoom-in"
//                 className="
//                   bg-white/15 text-white border border-white/20
//                   px-4 py-1 rounded-2xl
//                 "
//               >
//                 <i className="ri-link text-[#09ae7b] pr-2"></i>
//                 Paste link
//               </div>
//             </Link>
//           </div>

//           <div
//             className="
//               h-80
//               w-full max-w-[960px]
//               flex flex-col items-center gap-5 pt-5
//               border-2 border-dashed border-white/20
//               bg-blue-500/10
//               hover:bg-blue-500/20
//               transition-colors duration-300
//               rounded-4xl
//             "
//           >
//             <img
//               src="https://www.happyscribe.com/assets/uploader_link_illustration-2ae1b418.svg"
//               className="w-30 pointer-events-none"
//             />

//             <div className="text-white/70 text-center">
//               Paste your link and click the button to import your video
//             </div>

//             <input
//               data-aos="zoom-in"
//               onChange={(e) => setLink(e.target.value)}
//               type="text"
//               placeholder="Paste link here https://www.youtube.com/watch?v=..."
//               className={`
//                 w-[80%] px-5 py-4 rounded-xl
//                 bg-white/10 text-white placeholder-white/40
//                 border border-white/20
//                 focus:border-white/40 focus:outline-none
//                 ${current.color}
//               `}
//             />

//             <button
//               disabled={!link}
//               className={`
//                 flex items-center gap-2 px-10 py-3 rounded-xl transition
//                 ${
//                   link
//                     ? "bg-[#004ae5] text-white hover:opacity-80 shadow-[0_12px_35px_rgba(37,99,235,0.35)]"
//                     : "bg-white/20 text-white/40 cursor-not-allowed"
//                 }
//               `}
//             >
//               <i className="ri-download-2-line text-lg"></i>
//               Import file from link
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Links;
