"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import mainLogo from "@/public/images/auth-logo.png";
import Cookies from "js-cookie";

export default function RoleSelectPage() {
  const [selected, setSelected] = useState<"employer" | "company" | null>(
    "employer",
  );
  const router = useRouter();

  const handleNext = () => {
    if (selected === "employer") {
      Cookies.set("role", "employer");
    } else {
      Cookies.set("role", "company");
    }
    router.push("/auth/sign-up");
  };

  return (
    <div className="w-full max-w-[520px] p-2 lg:p-0">
      <div className="rounded-2xl bg-[#00081F] border border-[#1e2d50] p-4 lg:p-10 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link href="/">
          <img src={mainLogo.src} alt="Commi Logo" />
        </Link>

        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-semibold tracking-wide">
          Tell us who you are:
        </h2>

        {/* Options */}
        <div className="w-full flex flex-col gap-3">
          {/* Employer */}
          <button
            onClick={() => setSelected("employer")}
            className={`cursor-pointer w-full text-left rounded-xl border px-4 py-4 transition-all duration-200 ${
              selected === "employer"
                ? "border-white bg-transparent"
                : "border-[#1e2d50] bg-[#0d1b3e] hover:border-[#2a3f6f]"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 transition-colors ${
                  selected === "employer"
                    ? "bg-[#ff6b35] border-[#ff6b35]"
                    : "border-[#4a5a7a] bg-transparent"
                }`}
              >
                {selected === "employer" && (
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className=" text-sm font-medium">Employer</p>
                <p className="text-[#8899b8] text-xs mt-0.5">
                  Login to manage jobs, track applicants, and hire top talent
                  easily.
                </p>
              </div>
            </div>
          </button>

          {/* Company */}
          <button
            onClick={() => setSelected("company")}
            className={`cursor-pointer w-full text-left rounded-xl border px-4 py-4 transition-all duration-200 ${
              selected === "company"
                ? "border-white bg-transparent"
                : "border-[#1e2d50] bg-[#0d1b3e] hover:border-[#2a3f6f]"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 transition-colors ${
                  selected === "company"
                    ? "bg-[#ff6b35] border-[#ff6b35]"
                    : "border-[#4a5a7a] bg-transparent"
                }`}
              >
                {selected === "company" && (
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className=" text-sm font-medium">Company</p>
                <p className="text-[#8899b8] text-xs mt-0.5">
                  Access your company dashboard to manage recruitment process.
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!selected}
          className="cursor-pointer w-full py-3 rounded-full bg-[#FF6041] hover:bg-[#e85e2a]  font-semibold text-sm tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
