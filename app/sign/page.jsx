"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
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
      mirror: false,
    });
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("API_URL/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      });

      if (!res.ok) throw new Error("Signup failed");

      const data = await res.json();

      // في حال الباك رجع token مباشرة
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/Home");
      } else {
        // لو بده تسجيل دخول بعد التسجيل
        router.push("/Login");
      }
    } catch (err) {
      setError("Signup failed, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex justify-center items-center mt-40`}>
      <div
        data-aos="fade-up"
        className={` w-274  min-h-150 flex flex-row justify-between   rounded-2xl  shadow-[0_0_60px_1px_rgba(138,43,226,0.1)]
      bg-[linear-gradient(120deg,#00002e_0%,#00002e_50%,#000000_50%,#000000_100%)]

        `}
      >
        <div>
          <div className="flex pr-30 flex-col text-center gap-3 text-white relative justify-center items-center h-full w-134.25 ">
            <div className="absolute top-37 left-30 opacity-75">
              <Link href="/">
                <Image src="/img/img.png" alt="logo" width={160} height={60} />
              </Link>
            </div>

            <div className={`text-5xl`}>Welcome</div>

            <div className={``}>Create your account to get started.</div>
          </div>
        </div>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center w-134.25 text-white  min-h-150 "
        >
          <p className="text-[40px] ">Sign Up</p>

          <div className="relative mt-10">
            <input
              className="w-[300px] bg-transparent border-0 border-b-2 border-gray-600
              focus:border-purple-500 focus:outline-none transition text-white
              placeholder-gray-400 py-2"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="ri-user-line absolute right-2 bottom-2"></i>
          </div>

          <div className="relative mt-8">
            <input
              className="w-[300px] bg-transparent border-0 border-b-2 border-gray-600
              focus:border-purple-500 focus:outline-none transition text-white
              placeholder-gray-400 py-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="ri-mail-line absolute right-2 bottom-2"></i>
          </div>

          <div className="relative mt-8">
            <input
              className="w-[300px] bg-transparent border-0 border-b-2 border-gray-600
              focus:border-purple-500 focus:outline-none transition text-white
              placeholder-gray-400 py-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="ri-lock-fill absolute right-2 bottom-2"></i>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className="mt-10">
            <button
              type="submit"
              disabled={loading}
              className=" h-12.5 w-75 rounded-3xl 
               bg-blue-700 transition-all duration-300 hover:bg-blue-950 cursor-pointer

               disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </div>

          <div className="mt-5">
            Already have an account?
            <Link href="/login">
              <span
                className="text-blue-700 hover:text-blue-500 ml-1 cursor-pointer  
              transition-transform duration-200 
              
              "
              >
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
