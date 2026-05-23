"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import mainLogo from "@/public/images/auth-logo.png";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ForgetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSignUpButton = (e: React.FormEvent) => {
    e.preventDefault();

    Cookies.set("email", email);
    router.push("/auth/forget-otp-verify");

    console.log("email", email);
  };

  return (
    <div className="w-full max-w-[520px]  p-2 lg:p-0">
      <div className="rounded-2xl bg-[#00081F] border border-[#1e2d50] p-4 lg:p-10 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link href="/">
          <img src={mainLogo.src} alt="Commi Logo" />
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-wide text-white">
          Reset your password
        </h2>

        {/* Form Fields */}
        <form
          onSubmit={handleSignUpButton}
          className="w-full flex flex-col gap-4"
        >
          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-white font-semibold text-sm">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0a1628] border-[#1e2d50] text-white placeholder:text-[#4a5a7a] focus-visible:ring-[#FF6041] focus-visible:border-[#FF6041] rounded-lg h-12"
            />
          </div>

          {/* Request Password Change Button */}
          <Button
            type="submit"
            className="cursor-pointer w-full py-3 h-12 rounded-full bg-[#FF6041] hover:bg-[#e85e2a] font-semibold text-sm tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white"
          >
            Request Password Change
          </Button>
        </form>
      </div>
    </div>
  );
}
