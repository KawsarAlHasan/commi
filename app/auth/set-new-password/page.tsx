"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import mainLogo from "@/public/images/auth-logo.png";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function SetNewPassword() {
  const email = Cookies.get("email");
  const otp = Cookies.get("otp");
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      otp,
    };

    console.log("payload", payload);

    router.push("/");
  };

  return (
    <div className="w-full max-w-[520px] p-2 lg:p-0">
      <div className="rounded-2xl bg-[#00081F] border border-[#1e2d50] p-4 lg:p-10 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link href="/">
          <img src={mainLogo.src} alt="Commi Logo" />
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-wide text-white">
          Enter new password
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="password"
              className="text-white font-semibold text-sm"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0a1628] border-[#1e2d50] text-white placeholder:text-[#4a5a7a] focus-visible:ring-[#FF6041] focus-visible:border-[#FF6041] rounded-lg h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5a7a] hover:text-white transition-colors"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="confirmPassword"
              className="text-white font-semibold text-sm"
            >
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-[#0a1628] border-[#1e2d50] text-white placeholder:text-[#4a5a7a] focus-visible:ring-[#FF6041] focus-visible:border-[#FF6041] rounded-lg h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5a7a] hover:text-white transition-colors"
              >
                {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Update Password Button */}
          <Button
            type="submit"
            className="cursor-pointer w-full py-3 h-12 rounded-full bg-[#FF6041] hover:bg-[#e85e2a] font-semibold text-sm tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white"
          >
            Update Password
          </Button>
        </form>
      </div>
    </div>
  );
}
