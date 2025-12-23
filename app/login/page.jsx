"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className={`flex justify-center items-center mt-40 `}>
      <div
        data-aos="fade-up"
        className={` w-274  min-h-150 flex flex-row justify-between   rounded-2xl  shadow-[0_0_60px_1px_rgba(138,43,226,0.1)]
        bg-[linear-gradient(120deg,var(--color-slate-950)_0%,var(--color-slate-950)_50%,var(--color-purple-600)_50%,var(--color-purple-600)_100%)]
        `}
      >
        <form className="flex flex-col justify-center items-center w-134.25 text-white  min-h-150 ">
          <p className="text-[40px] mb-12">Login</p>

          <div className="relative w-full max-w-[320px] mb-8">
            <input
              className="
                w-full bg-transparent border-0 border-b-2 border-gray-600
                focus:border-purple-500 focus:outline-none
                text-white placeholder-gray-400 py-2
              "
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="ri-mail-line absolute right-2 bottom-2"></i>
          </div>

          <div className="relative w-full max-w-[320px] mb-10">
            <input
              className="
                w-full bg-transparent border-0 border-b-2 border-gray-600
                focus:border-purple-500 focus:outline-none
                text-white placeholder-gray-400 py-2
              "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="ri-lock-fill absolute right-2 bottom-2"></i>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full max-w-[320px] h-12 rounded-3xl
              bg-[#6524cc] transition hover:bg-[#7a3de0] hover:scale-105
              disabled:opacity-50
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="mt-6 text-sm">
            Don’t have an account?
            <Link href="/sign">
              <span className="text-[#7a3de0] ml-1 cursor-pointer hover:underline">
                Sign Up
              </span>
            </Link>
          </div>
        </form>

        <div>
          <div className="flex flex-col text-center gap-3 text-white relative justify-center items-center h-full w-134.25 ">
            <div className="absolute top-28 left-42 opacity-75">
           
              <Link href="/">
                <Image src="/img/img.png" alt="logo" width={160} height={60} />
              </Link>
            </div>

            <div className={`text-5xl`}>Welcome</div>
            <div className={`text-5xl ml-10`}>Back!</div>
            <div className={`ml-60`}>Sign in to access your dashboard.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

