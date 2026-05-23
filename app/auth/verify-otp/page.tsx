"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import mainLogo from "@/public/images/auth-logo.png";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyOTP() {
  const router = useRouter();
  const role = Cookies.get("role");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1);
    setOtp(updatedOtp);

    // move next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    // move previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalOtp = otp.join("");
    console.log("OTP:", finalOtp);

    if (role === "employer") {
      router.push("/user");
    } else if (role === "company") {
      router.push("/company");
    }
  };

  const handleResend = () => {
    console.log("Resend OTP");
  };

  return (
    <div className="w-full max-w-[520px] p-2 lg:p-0">
      <div className="rounded-2xl bg-[#00081F] border border-[#1e2d50] p-4 lg:p-10 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link href="/">
          <img src={mainLogo.src} alt="Commi Logo" />
        </Link>

        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold tracking-wide text-white text-center">
          Enter Emailed Verification Code
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
          {/* OTP Inputs */}
          <div className="flex items-center justify-center gap-3">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                placeholder="-"
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 text-center text-xl font-bold bg-[#071224] border border-[#1e2d50] text-white rounded-lg focus-visible:ring-[#FF6041] focus-visible:border-[#FF6041]"
              />
            ))}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="cursor-pointer w-full py-3 h-12 rounded-full bg-[#FF6041] hover:bg-[#e85e2a] font-semibold text-sm tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white"
          >
            Submit
          </Button>
        </form>

        {/* Login link */}
        <p className="text-[#97a5c0] text-sm">
          Didn’t get Code?{" "}
          <span
            onClick={handleResend}
            className="cursor-pointer font-semibold underline underline-offset-2 hover:text-[#ff6b35] transition-colors text-white"
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
}
