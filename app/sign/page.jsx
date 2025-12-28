"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("API_URL/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      });

      if (!res.ok) throw new Error();

      router.push("/login");
    } catch {
      setError("Signup failed, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div
        data-aos="fade-up"
        className="
          w-full max-w-[1100px]
          min-h-[600px]
          flex flex-col lg:flex-row
          gap-[38%]
          rounded-2xl
          shadow-[0_0_60px_1px_rgba(138,43,226,0.1)]

         bg-[linear-gradient(135deg,#00002e_0%,#00002e_35%,#00001a_55%,#000000_75%,#000000_100%)]
    lg:bg-[linear-gradient(135deg,#00002e_0%,#00002e_50%,#000000_50%,#000000_100%)]
           "
      >
     
        <form
          onSubmit={handleSignUp}
          className="
            flex flex-col justify-center items-center
            text-white w-full lg:w-1/2
            
            px-6 py-12
          "
        >
        
          <div className="lg:hidden">
            <Link href="/home">
              <Image src="/img/img.png" alt="logo" width={150} height={50} />
            </Link>
          </div>

          <p className="text-[36px] mb-6">Sign Up</p>

          <div className="relative w-full max-w-[320px] mb-8">
            <input
              className="
                w-full bg-transparent border-0 border-b-2 border-gray-600
                focus:border-purple-500 focus:outline-none
                text-white placeholder-gray-400 py-2
              "
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="ri-user-line absolute right-2 bottom-2"></i>
          </div>

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
              w-full max-w-[320px] h-12 rounded-[10px]
              bg-blue-700 transition-all duration-300
              hover:bg-blue-950 cursor-pointer
              disabled:opacity-50
            "
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <div className="mt-6 text-sm">
            Already have an account?
            <Link href="/login">
              <span className="text-blue-700 hover:text-blue-500 ml-1 cursor-pointer hover:underline">
                Login
              </span>
            </Link>
          </div>
        </form>

        <div className="hidden lg:flex w-1/2 text-white justify-center items-center relative">
          <div className="flex flex-col text-center gap-3">
            <div className="absolute top-0 right-0">
              <Link href="/home">
                <Image src="/img/img.png" alt="logo" width={160} height={60} />
              </Link>
            </div>

            <div className="text-5xl">Welcome</div>
            <div>Create your account to get started.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
