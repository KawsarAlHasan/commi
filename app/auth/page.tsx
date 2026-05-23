"use client";

import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import mainLogo from "@/public/images/auth-logo.png";

export default function Auth() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = searchParams.get("mode");
  const mainText = mode == "login" ? "Login" : "Sign Up";

  const handleEmailButton = () => {
    if (mode == "login") {
      router.push("/auth/login");
    } else {
      router.push("/auth/role");
    }
  };

  return (
    <div className="w-full max-w-[520px] p-2 lg:p-0">
      <div className="rounded-2xl bg-[#00081F] border border-[#1e2d50] p-4 lg:p-10 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link href="/">
          <img src={mainLogo.src} alt="Commi Logo" />
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-wide">{mainText}</h2>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3">
          {/* Sign Up with Email */}
          <button
            onClick={handleEmailButton}
            className="cursor-pointer w-full flex items-center justify-center gap-3 rounded-full bg-[#162040] hover:bg-[#1d2d55] border border-[#1e2d50] px-5 py-3 text-[16px] font-medium transition-colors duration-200"
          >
            <MdOutlineEmail size={24} />
            {mainText} with Email
          </button>

          {/* Continue with Google */}
          <button className="cursor-pointer w-full flex items-center justify-center gap-3 rounded-full bg-[#162040] hover:bg-[#1d2d55] border border-[#1e2d50] px-5 py-3 text-sm font-medium transition-colors duration-200">
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-px bg-[#ffffff]" />
          <span className="text-xs">or</span>
          <div className="flex-1 h-px bg-[#ffffff]" />
        </div>

        {/* Sign up link */}
        <p className="text-[#97a5c0] text-sm">
          {mode == "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link
            href={mode == "login" ? "/auth?mode=signup" : "/auth?mode=login"}
            className="font-semibold underline underline-offset-2 hover:text-[#ff6b35] transition-colors"
          >
            {mode == "login" ? "Sign Up" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}
