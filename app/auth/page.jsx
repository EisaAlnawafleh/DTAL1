import Link from "next/link";
import TypedText2 from "../components/TypedText2";
import Image from "next/image";
const Auth = () => {
  return (
    <div className={`w-full h-screen flex flex-row text-white`}>
        <div
          className={`text-4xl fixed left-5 top-5 text-transparent bg-clip-text bg-linear-to-r from-[#7220e4] to-[#f55cfe]`}
          >
        <Link href="/">
          DTAL
            </Link>
        </div>
      <div className={`w-[50%] h-full bg-[#00002e] start `}>
        <div className={`flex ml-5  items-center h-full`}>
          <TypedText2 />
        </div>
      </div>
      <div
        className={`w-[50%] h-full start_1 bg-black flex flex-col justify-center items-center gap-10`}
      >
        <div className={` text-[32px] start_text`}>Get started</div>
        <div className={`flex flex-row start_bottum gap-5 w-full justify-center`}>
            <Link href="/login" >
          <div
            className={`w-50 h-10  start_bottum_1  bg-blue-700 rounded-[5px] cursor-pointer transition-all duration-300 hover:bg-blue-950 flex justify-center items-center`}
            >
            Log in
          </div>
              </Link>
          <Link href="/sign">
          <div
            className={`w-50 h-10 start_bottum_1 bg-blue-700 rounded-[5px] flex justify-center cursor-pointer transition-all duration-300 hover:bg-blue-950 items-center`}
            >
            Sign up for free
          </div>
              </Link>
        </div>
        <div>
            <Link href="/">
          <Image src="/img/img.png" alt="logo" width={160} height={60} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
